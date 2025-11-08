// pages/About.js
import React from 'react';
import { Box, Grid, Typography, Stack, Button, Paper } from '@mui/material';
import './assets/fonts.css';

const About = ({ isDarkMode }) => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        pt:{xs:12, sm: 11,md:5}, // offset for sticky navbar
        px: { xs: 4, sm: 4, md: 8 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        mt:0,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ maxWidth: '1200px', mx: '4', alignItems: 'center'}}
      >
        {/* Left side: Image / visual */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: 'url(https://i.imgur.com/9igX6bi.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            minHeight: { xs: '273px', sm:'450px', md: '400px' },
          }}
        />

        {/* Right side: Text content */}
        <Grid
          item
          xs={12}
          md={6}
          component={Paper}
          elevation={0}
          sx={{ backgroundColor: 'transparent',
                textAlign: 'left' }}
        >
          <Typography
            variant="h4"
            sx={{ fontFamily: 'Majesty', fontWeight: 200, fontSize: '60px', mb: 2 }}
          >
            about <Box component="span" sx={{ color: '#ff69b4' }}>me</Box>
          </Typography>

          <Typography variant="h6" sx={{ fontFamily: 'Le Jour Serif', mb: 1 }}>
            Zahrea Franklin (she / her)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            A software engineer, data science enthusiast, and proud tech-fluencer.
            I graduated in 2023 with a B.S. in Computer Science from California State University, Sacramento. 
            These days, I’m deepening my skills through a competitive data science fellowship with The Knowledge House.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
            My tech journey started with curiosity and a Tumblr theme. This curiosity spiraled into self-taught HTML,
            full-blown programming, and a love for making digital experiences feel beautiful and useful.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Off-screen, I’m the voice behind <b>Truly Rea</b> — my blog where code meets content and creativity.
            Whether I’m styling a dataset or a look, I’m here to show that beauty and tech aren’t mutually exclusive.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: 'Le Jour Serif', mb: 1 }}>
            See What I've Been Up To :
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Check out my GitHub to see my projects, grab a copy of my resume, or dive into my blog for a look at the stylish side of tech.
          </Typography>
<Stack
    direction={{ xs: 'column', sm: 'row' }} // column on mobile, row on larger screens
    spacing={2}
    sx={{
      mb: 5,
      alignItems: 'center', // center horizontally
      justifyContent: 'center', // center vertically in column mode
    }}
  >
    <Button
      variant="contained"
      size="large"
      color="primary"
      href="https://github.com/zahreafranklin"
      target="_blank"
      sx={{ width: { xs: '100%', sm: 'auto'}, '&:hover': { backgroundColor: '#ffbad3' } }} // full width on mobile
    >
      GitHub
    </Button>

    <Button
      variant="contained"
      size="large"
      href="/zahreafranklin_resume.pdf"
      download
      sx={{ width: { xs: '100%', sm: 'auto' }, '&:hover': { backgroundColor: '#ffbad3' } }}
    >
      Download Resume
    </Button>
  </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
