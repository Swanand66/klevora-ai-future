import dotenv from 'dotenv';
dotenv.config();
// Gemini API integration
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
import express from 'express';
import fs from 'fs';
import cors from 'cors';
import axios from 'axios';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

const KB_PATH = path.resolve(process.cwd(), 'src/rag_knowledge.txt');

/**
 * FIXED: This function now retrieves the full, complete line of context.
 * This is crucial for providing the AI with the correct information to form an answer.
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

  if (relevantChunks.length > 0) {
    // Return the single most relevant line as context.
    return relevantChunks[0];
  }

  return '';
}

app.post('/api/rag-chat', async (req, res) => {
  const { question } = req.body;
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Missing question' });
  }

  const context = retrieveContext(question);

  // Direct answer for email queries
  if (/\bemail\b/i.test(question)) {
    return res.json({ response: 'klevora.connect@gmail.com' });
  }
  // Direct answer for pricing queries - expanded keywords and shorter response
  if (/\b(pricing|price|cost|plans|how much)\b/i.test(question)) {
    return res.json({ response: 'For detailed pricing information, please contact our sales team.' });
  }

  /**
   * IMPROVEMENT 1: A more directive prompt that enforces a single, concise sentence limit.
   * This is the primary method for controlling the output format.
   */
  const fullPrompt = `Based on the context, answer the user's question in one single, concise sentence.
Your entire response must not exceed one line.

Context: "${context || 'No context available'}"
Question: "${question}"

Answer (one sentence):`;

  try {
    // Use Gemini API for generation
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(fullPrompt);
    const geminiRes = result.response;
    let cleanResponse = geminiRes.text() ? geminiRes.text().trim() : 'No response from Gemini.';
    // Guarantee a single-line limit
    const responseLines = cleanResponse.split('\n');
    const finalResponse = responseLines.slice(0, 1).join('\n');
    res.json({ response: finalResponse });
  } catch (err) {
    console.error('Error contacting Gemini backend:', err.message);
    res.status(500).json({ error: 'Gemini backend error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`RAG backend running on port ${PORT}`);
});

