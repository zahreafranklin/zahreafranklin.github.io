import { aboutMe } from "./aboutMe.js";

export async function handler(event) {
 const headers = {
  "Access-Control-Allow-Origin": event.headers.origin || "*",
  "Vary": "Origin",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  const { prompt } = JSON.parse(event.body || "{}");
  if (!prompt) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Prompt required" }) };
  }

  try {
    // ✅ Use the built-in global fetch (no import needed)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: aboutMe },
          { role: "user", content: prompt },
        ],
      }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: data.choices?.[0]?.message?.content }),
    };
  } catch (error) {
    console.error("❌ Server error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Server error", details: error.message }),
    };
  }
}
