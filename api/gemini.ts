import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

    // ✅ Use API key as query param instead of Bearer
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return res.status(200).json({ text: data.candidates[0].content.parts[0].text });
    }

    return res.status(500).json({ error: "No response from Gemini", details: data });
  } catch (err: any) {
    console.error("Gemini API error:", err);
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}

// import type { VercelRequest, VercelResponse } from "@vercel/node";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { prompt, context } = req.body;

//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const fullPrompt = `
//       You are Klevora's AI assistant. Use the following context to answer questions.
//       If the question cannot be answered using the context, use your general knowledge
//       but stay within Klevora's domain of AI and business automation.

//       Context:
//       ${context}

//       Question: ${prompt}
//     `;

//     const response = await fetch(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.GEMINI_API_KEY}`, // ✅ make sure this matches Vercel dashboard
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               role: "user",
//               parts: [{ text: fullPrompt }],
//             },
//           ],
//         }),
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       console.error("Gemini API error:", data);
//       return res.status(response.status).json({ error: "Gemini API failed", details: data });
//     }

//     const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (text) {
//       return res.status(200).json({ text });
//     }

//     return res.status(500).json({ error: "No response from Gemini", details: data });
//   } catch (err: any) {
//     console.error("Server error:", err);
//     return res.status(500).json({ error: "Server error", details: err.message });
//   }
// }


