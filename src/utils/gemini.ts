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
const CLIENT_ID =
  "222292187669-gll3t1t6tafi5ndi9gfebqhr7mbi5qpo.apps.googleusercontent.com";

let tokenClient: any;
let accessToken: string | null = null;

/**
 * Initialize Google Identity Services for OAuth2
 */
export async function initGeminiAuth(): Promise<void> {
  return new Promise((resolve) => {
    if (document.getElementById("gis-sdk")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "gis-sdk";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      tokenClient = (window as any).google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/generative.language",
        callback: (tokenResponse: any) => {
          accessToken = tokenResponse.access_token;
          console.log("✅ Access token received:", accessToken);
          resolve();
        },
      });
    };

    document.body.appendChild(script);
  });
}

/**
 * Trigger login popup
 */
export function loginToGemini(): void {
  if (!tokenClient) {
    throw new Error("Google Identity Services not initialized. Call initGeminiAuth() first.");
  }
  tokenClient.requestAccessToken();
}

/**
 * Generate a Gemini response (same logic as your code)
 */
export async function getGeminiResponse(
  prompt: string,
  context: string
): Promise<string> {
  try {
    if (!accessToken) {
      throw new Error("Not authenticated. Please call loginToGemini() first.");
    }

    const fullPrompt = `
      You are Klevora's AI assistant. Use the following context to answer questions.
      If the question cannot be answered using the context, use your general knowledge
      but stay within Klevora's domain of AI and business automation.

      Context:
      ${context}

      Question: ${prompt}
    `;

    const resp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
        }),
      }
    );

    const data = await resp.json();

    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    console.error("Gemini API Error:", data);
    return "⚠️ No response from Gemini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my AI system. Please try again later.";
  }
}
