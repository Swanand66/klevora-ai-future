import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import http from 'http';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Define path to the knowledge base file
const KB_PATH = path.resolve(process.cwd(), 'src/rag_knowledge.txt');

/**
 * Retrieves the most relevant line of context from the knowledge base file
 * based on keywords from the user's question.
 * @param {string} question The user's question.
 * @returns {string} A single line of relevant context or an empty string if not found.
 */
function retrieveContext(question) {
  let kbText = '';
  try {
    kbText = fs.readFileSync(KB_PATH, 'utf-8');
  } catch (e) {
    console.error('Error reading knowledge base:', e);
    return '';
  }

  const keywords = question.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const kbLines = kbText.split('\n').filter(line => line.trim() !== '');

  const relevantChunks = kbLines.filter(line =>
    keywords.some(kw => line.toLowerCase().includes(kw))
  );

  // Return the single most relevant line as context.
  return relevantChunks.length > 0 ? relevantChunks[0] : '';
}

/**
 * Handles incoming HTTP requests, routes them, and sends back responses.
 * @param {http.IncomingMessage} req The request object.
 * @param {http.ServerResponse} res The response object.
 */
const requestHandler = async (req, res) => {
  // --- CORS Headers ---
  // Set headers to allow cross-origin requests (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle pre-flight CORS requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  // --- API Routing ---
  if (req.url === '/api/rag-chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // accumulate request body
    });

    req.on('end', async () => {
      try {
        const { question } = JSON.parse(body);

        if (!question || typeof question !== 'string') {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing or invalid "question" field' }));
          return;
        }

        // --- Hardcoded Logic ---
        // Direct answer for email queries
        if (/\bemail\b/i.test(question)) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ response: 'klevora.connect@gmail.com' }));
            return;
        }
        // Direct answer for pricing queries
        if (/\b(pricing|price|cost|plans|how much)\b/i.test(question)) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ response: 'For detailed pricing information, please contact our sales team.' }));
            return;
        }

        // --- RAG and AI Logic ---
        const context = retrieveContext(question);

        const fullPrompt = `Based on the context, answer the user's question in one single, concise sentence.
Your entire response must not exceed one line.

Context: "${context || 'No context available'}"
Question: "${question}"

Answer (one sentence):`;
        
        // Use Gemini API for generation
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(fullPrompt);
        const geminiRes = result.response;
        let cleanResponse = geminiRes.text() ? geminiRes.text().trim() : 'No response from Gemini.';
        
        // Guarantee a single-line limit
        const finalResponse = cleanResponse.split('\n')[0];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ response: finalResponse }));

      } catch (err) {
        console.error('Error processing request:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'An internal server error occurred.' }));
      }
    });
  } else {
    // Handle 404 Not Found for any other routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
};
