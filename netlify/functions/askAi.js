import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { prompt } = JSON.parse(event.body);

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt required" }),
      };
    }

    // 🎓 Context for TrulyBot — customize this however you like
    const aboutMe = `
You are AI assistant — the virtual portfolio assistant for Zahrea Franklin.
You only answer questions about Zahrea Franklin, her projects, and her work.
If a question is unrelated, reply politely that you can only answer portfolio-related queries.

About Zahrea:
Zahrea Franklin is a Software Engineer, Data Science Fellow (The Knowledge House 2025 cohort),
and creative technologist merging fashion, data, and tech under her personal brand "Truly Rea."
She founded "The Stylish Scripts" Substack where she publishes data-meets-fashion analyses
(e.g., "Is Athleisure Now the New Luxury?"), and builds apps like:
- Flourish Habit Tracker (React + Data Viz)
- Book Bestie (book recommendation app)
- Pretty Parlor (animated beauty parlor website)
- Truly Tech / Techfluence (tech storytelling series)

She aims to normalize women in tech, mentor young girls in coding, and break stereotypes about who belongs in STEM.
`;

    // 💬 Send to OpenAI
    const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
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

    const data = await aiResponse.json();

    if (data.error) {
      console.error("OpenAI error:", data.error);
      return { statusCode: 500, body: JSON.stringify(data.error) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ response: data.choices[0].message.content }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
