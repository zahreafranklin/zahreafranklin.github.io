import fetch from "node-fetch";
import { aboutMe } from "../../src/aboutMe.js";

export async function handler(event) {
  // Set common headers once
  const headers = {
    "Access-Control-Allow-Origin": "https://zahreafranklin.github.io", // ✅ your site
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle Safari preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "OK" };
  }

  try {
    const { prompt } = JSON.parse(event.body || "{}");

    if (!prompt) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Prompt required" }),
      };
    }

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
      headers, // ✅ include CORS headers here too
      body: JSON.stringify({ response: data.choices?.[0]?.message?.content }),
    };
  } catch (err) {
    console.error("Server error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Server error", details: err.message }),
    };
  }
}
