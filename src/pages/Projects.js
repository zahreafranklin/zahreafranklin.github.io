import React from "react";
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, Stack } from "@mui/material";

const projects = [
  {
    title: "Is Athleisure Now the New Luxury?",
    date: "November 2025",
    category: "Tech Stack: Python, Pandas, Matplotlib, Seaborn",
    description:
      "A data-driven exploration of how athleisure brands like SKIMS, Alo Yoga, and Lululemon evolved into modern luxury through pricing, popularity, and cultural influence.",
    image: "/imgs/datasci1.png",
    notionLink: "https://www.notion.so/Analysis-on-Athleisure-Data-Deepdive-Project-2a434e51f39080b5b51ff1fe3e1b5391",
    githubLink: "https://github.com/zahreafranklin/athleisure-analysis",
    substackLink: "https://zahreafranklin.substack.com/p/when-sweatpants-become-designer-is",
  },
  {
    title: "The Pretty Parlor",
    date: "February 2021",
    category: "Tech Stack: ReactJS, JavaScript, HTML / CSS",
    description:
      "A modern and fully responsive ReactJS website mockup for a beauty parlor, featuring smooth animations, interactive navigation, and elegant UI elements designed to enhance the user experience and reflect the brand’s luxurious aesthetic. ",
    image: "/imgs/swe1.png",
    notionLink: "https://www.notion.so/The-Pretty-Parlor-Animated-React-Website-2a434e51f39080318f91e79a7b02a3fb",
    githubLink: "https://github.com/yourname/flourish-tracker",
  },
];

const Projects = ({ isDarkMode }) => {
  return (
    <Box 
      id="projects"
      sx={{ padding: "4rem 2rem", 
      //maxWidth: "1100px",
       margin: "0 auto",
       backgroundColor: 'background.default',
       }}>
       <Typography
        variant="h4"
        align="center"
        sx={{mb: 4, fontWeight:'200', fontSize:{ xs: '35px', sm: '45px', md: '40px', lg: '50px' }, fontFamily: 'Majesty'  }}
      >
        my <Box component="span" sx={{ color: '#ff69b4' }}>projects</Box>
      </Typography>

      {projects.map((proj, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mb: 5,
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            overflow: "hidden",
            transition: "0.3s ease",
            "&:hover": { boxShadow: "0 8px 25px rgba(0,0,0,0.12)" },
          }}
        >
          <CardMedia
            component="img"
            image={proj.image}
            alt={proj.title}
            sx={{
              width: { xs: "100%", md: "40%" },
              height: { xs: 200, md: "auto" },
              objectFit: "cover",
            }}
          />

          <CardContent sx={{ flex: 1, padding: "2rem" }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              {proj.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ display: "block", color: "text.secondary", mb: 1 }}
            >
            {proj.date} • {proj.category}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
              {proj.description}
            </Typography>

            <Stack direction="row" spacing={1}>
              {proj.substackLink && (
                <Button
                  variant="contained"
                  href={proj.substackLink}
                  target="_blank"
                  sx={{
                    backgroundColor: "#F16295",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#FD93B9" },
                  }}
                >
                  Read Article
                </Button>
              )}
              {proj.githubLink && (
                <Button
                  variant="outlined"
                  href={proj.githubLink}
                  target="_blank"
                  sx={{ textTransform: "none" }}
                >
                  View Code
                </Button>
              )}
              {proj.notionLink && (
                <Button
                  variant="outlined"
                  href={proj.notionLink}
                  target="_blank"
                  sx={{ textTransform: "none" }}
                >
                  View Details
                </Button>
              )}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Projects;
