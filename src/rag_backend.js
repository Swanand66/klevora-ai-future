
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
 * Retrieves up to two relevant lines from the knowledge base based on keywords in the question.
 * @param {string} question
 * @returns {string}
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
  return relevantChunks.length > 0 ? relevantChunks.slice(0, 2).join('\n') : '';
}

/**
 * Generates the prompt for the AI model.
 * @param {string} context
 * @param {string} question
 * @returns {string}
 */
function buildPrompt(context, question) {
  return `You are a professional, friendly AI assistant for Klevora.
Your primary goal is to answer user questions based *only* on the information provided in the "<Context>" section.

**Instructions:**
1. Carefully read the "<Context>" and the "<UserQuestion>".
2. Formulate a direct and helpful answer using *only* the provided context.
3. Do not use any external knowledge or make up information.
4. If the context does not contain the answer, you must respond *only* with: "I'm sorry, I don't have information on that."
5. Keep the answer clear and to the point.

<Context>
${context || 'No information available.'}
</Context>

<UserQuestion>
${question}
</UserQuestion>

Answer:`;
}

app.post('/api/rag-chat', async (req, res) => {
  const { question } = req.body;
  if (!question || typeof question !== 'string' || !question.trim()) {
    return res.status(400).json({ error: 'Question must be a non-empty string.' });
  }

  // Direct answer for email queries
  if (/\bemail\b/i.test(question)) {
    return res.json({ response: 'klevora.connect@gmail.com' });
  }

  const context = retrieveContext(question);
  const fullPrompt = buildPrompt(context, question);

  try {
    const ollamaRes = await axios.post('http://localhost:11434/api/generate', {
      model: 'mistral',
      prompt: fullPrompt,
      stream: false,
      options: {
        num_predict: 128,
      },
    });
    const cleanResponse = ollamaRes.data.response ? ollamaRes.data.response.trim() : 'No response from bot.';
    res.json({ response: cleanResponse });
  } catch (err) {
    console.error('Error contacting Ollama backend:', err.message);
    res.status(500).json({ error: 'An error occurred with the AI backend.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`RAG backend running on port ${PORT}`);
});