import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import StorageIcon from "@mui/icons-material/Storage";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const skills = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Front-End Development",
    desc: "Crafting responsive, visually engaging web interfaces using modern aesthetic frameworks",
    tools: "React · JavaScript · HTML · CSS · Material UI",
  },
  {
    icon: <DataUsageIcon fontSize="large" />,
    title: "Data Analysis / Data Science",
    desc: "Transforming raw data into actionable insights through visualization, statistics & predictive modeling.",
    tools: "Python · Pandas · NumPy · Tableau · Excel",
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: "Software Engineering ",
    desc: "Developing robust APIs and efficient server-side logic to power scalable applications.",
    tools: "Node.js · Express.js · MongoDB · SQL",
  },
  {
    icon: <CampaignIcon fontSize="large" />,
    title: "Social Media Management",
    desc: "Building brand presence through data-driven strategies across digital platforms",
    tools: "Buffer · Canva · Google Analytics · Later",
  },
  {
    icon: <EmojiObjectsIcon fontSize="large" />,
    title: "Tech-Fluencer",
    desc: "Using digital platforms to share tech insights, trends, and tools that spark creativity and learning",
    tools: "CapCut · Notion · Figma · Lightroom",
  },
  {
    icon: <SmartToyIcon fontSize="large" />,
    title: "AI / ML",
    desc: "Applying machine learning techniques to automate decision-making and uncover data-driven patterns.",
    tools: "Python · scikit-learn · TensorFlow · AWS",
  },
];

const Skills = ({ isDarkMode }) => {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: { xs: 2, sm: 3, md: 8 },
          backgroundColor: 'background.default',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{mb: 4, fontWeight:'200', fontSize:{ xs: '35px', sm: '45px', md: '40px', lg: '50px' }, fontFamily: 'Majesty'  }}
      >
        my <Box component="span" sx={{ color: '#ff69b4' }}>skills</Box>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                pt:7,
                p: 4,
                textAlign: "center",
                borderRadius: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  backgroundColor: isDarkMode ? '#F16295' : '#FD93B9',
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                {skill.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {skill.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {skill.desc}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontStyle: "italic", display: "block", mt: 1 }}
              >
                Tools: {skill.tools}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
