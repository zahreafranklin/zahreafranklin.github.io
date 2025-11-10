import { aboutMe } from "./aboutMe.js";

export async function handler(event) {
  console.log("🛰️ Incoming request headers:", event.headers);
  console.log("🌍 Origin detected:", event.headers.origin);

 const allowedOrigins = [
  "https://zahreafranklin.github.io",
  "https://zahreafranklin-ai.netlify.app",
];
  const origin = event.headers.origin;
  
  const headers = {
  "Access-Control-Allow-Origin": allowedOrigins.includes(origin)
    ? origin
    : "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
  "Vary": "Origin",
};

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  const { prompt } = JSON.parse(event.body || "{}");
  if (!prompt) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Prompt required" }),
    };
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are an AI portfolio assistant for Zahrea Franklin. Use the following context to answer questions accurately and warmly: ${aboutMe}`,
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    const data = await response.json();
    
    console.log("✅ OpenAI API call success:", JSON.stringify(data, null, 2));

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
