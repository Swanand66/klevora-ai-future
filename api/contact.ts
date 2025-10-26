
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body: any = {};
  try {
    if (typeof req.body === 'string') {
      body = JSON.parse(req.body);
    } else if (req.body && typeof req.body === 'object') {
      body = req.body;
    }
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }
  const { name, email, phone, message } = body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  let sheetError = null;
  let emailError = null;
  // Google Sheets
  try {
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          // When the private key is stored in an env var, newlines are often escaped as \n
          // Convert literal \n into actual newlines
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      const sheets = google.sheets({ version: 'v4', auth });
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:E',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[new Date().toISOString(), name, email, phone, message]],
        },
      });
    }
  } catch (err) {
    sheetError = err instanceof Error ? err.message : String(err);
    console.error('[contact] Google Sheets error:', err);
  }
  // Email
  try {
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD && process.env.NOTIFICATION_EMAIL) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New Contact Form Submission - ${name}`,
        html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br><b>Message:</b> ${message.replace(/\n/g, '<br>')}`
      });
    }
  } catch (err) {
    emailError = err instanceof Error ? err.message : String(err);
    console.error('[contact] Email error:', err);
  }

  if (sheetError || emailError) {
    return res.status(500).json({
      error: 'Failed to process form',
      sheetError,
      emailError
    });
  }
  return res.status(200).json({ success: true, message: 'Form submitted successfully!' });
}
