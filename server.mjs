import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// ✅ Explicit and Safari-safe CORS
app.use(
  cors({
    origin: [
      "https://zahreafranklin.github.io", // your live site
      "http://localhost:3000",            // local dev
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle Safari’s preflight requests cleanly
app.options(/.*/, cors());

app.use(express.json());

// ✅ Test route (for quick checks)
app.get("/test", (req, res) => {
  res.send("✅ Test route is working!");
});

// 🤖 AI assistant route
app.post("/api/ask", async (req, res) => {
  console.log("🌐 Incoming request: POST /api/ask");

  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
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
          { role: "system", content: "You are a helpful portfolio assistant." },
          { role: "user", content: prompt },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("❌ OpenAI error:", data.error);
      return res.status(500).json({ error: "OpenAI error", details: data.error });
    }

    const reply = data.choices?.[0]?.message?.content || "No response generated.";
    res.json({ response: reply });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// 🚀 Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log("🔐 Using OpenAI Key:", process.env.OPENAI_API_KEY?.slice(0, 10) + "...");
});