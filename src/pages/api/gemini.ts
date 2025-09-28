import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt, context } = req.body;

    const fullPrompt = `
      You are Klevora's AI assistant. Use the following context to answer questions.
      If the question cannot be answered using the context, use your general knowledge
      but stay within Klevora's domain of AI and business automation.

      Context:
      ${context}

      Question: ${prompt}
    `;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GOOGLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      res.status(200).json({ text: data.candidates[0].content.parts[0].text });
    } else {
      res.status(500).json({ error: "No response from Gemini", details: data });
    }
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
