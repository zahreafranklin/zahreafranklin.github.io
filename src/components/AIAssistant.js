import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import AssistantIcon from '@mui/icons-material/Assistant';
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CircularProgress from "@mui/material/CircularProgress";

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Hardcoded questions and answers
  const hardcodedQA = {
    "What is your background?":
      "My background is in tech. I have both an Associates Degree and a Bachelor's Degree in Computer Science",
    "what do you specialize in?":
      "I specialize in software engineering, web development and most recently, data sciene and analytics",
    "What is a tech-fluencer?":
      "A 'tech-fluencer' is a term I coined for myself since I also act as an influencer creating tech related content in my spare time",
    "Can I see your resume?":
      "Sure! You can find my resume on the 'Resume' section of my portfolio. Feel free to download it from there.",
    "Do you offer freelance services?":
      "At this moment, no. However, I'm open to this being something I offer in the future.",
    "How can I contact you?":
      "You can contact me through the 'Contact' page on my portfolio or send me an email directly at [zahrea.franklin@gmail.com].",
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPrompt("");
    setResponse("");
    setLoading(false);
  };

  const handleSendPrompt = async () => {
  if (!prompt.trim()) return;

  // Check hardcoded questions first
  if (hardcodedQA[prompt]) {
    setResponse(hardcodedQA[prompt]);
    return;
  }

  setLoading(true);
  try {
   const result = await fetch("https://zahreafranklin-ai.netlify.app/.netlify/functions/askAi", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt }),
});




    const data = await result.json();
    setResponse(data.response || "No response received.");
  } catch (error) {
    console.error("Error contacting AI:", error);
    setResponse("An error occurred. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Button
        variant="contained"
        endIcon={<SmartToyIcon />}
        onClick={handleOpen}
        sx={{
           fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 0.8, sm: 1, md: 1.2 },
                '&:hover': { backgroundColor: '#ffbad3' },
                width: { xs: '45%', sm: 'auto' },
        }}
      >
        AI Assistant
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <AssistantIcon /> AI Assistant
        </DialogTitle>
        <center><i>Hi! I'm your AI Assistant and I'm here to help. </i></center>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Ask me anything about my portfolio!"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSendPrompt}
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Send"}
          </Button>
          {response && (
            <Typography
              variant="body1"
              sx={{ mt: 2, whiteSpace: "pre-wrap" }}
            >
              {response}
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIAssistant;
