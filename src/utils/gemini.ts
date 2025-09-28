// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Initialize Gemini API
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// export async function getGeminiResponse(
//   prompt: string,
//   context: string
// ): Promise<string> {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    
//     const fullPrompt = `
//       You are Klevora's AI assistant. Use the following context to answer questions.
//       If the question cannot be answered using the context, use your general knowledge
//       but stay within Klevora's domain of AI and business automation.

//       Context:
//       ${context}

//       Question: ${prompt}
//     `;

//     const result = await model.generateContent(fullPrompt);
//     const response = result.response;
//     return response.text();
//   } catch (error) {
//     console.error('Gemini API Error:', error);
//     return "I apologize, but I'm having trouble connecting to my AI system. Please try again later.";
//   }
// }
// gemini.ts
export async function getGeminiResponse(prompt: string, context: string): Promise<string> {
  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, context }),
    });

    const data = await res.json();

    if (data.text) {
      return data.text;
    } else {
      console.error("Gemini API Error:", data);
      return "⚠️ No response from Gemini.";
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting. Please try again later.";
  }
}
