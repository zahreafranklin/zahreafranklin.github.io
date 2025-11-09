import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AIAssistant from '../components/AIAssistant.js';
import Hero from '../components/Hero.js';
import bground from '../images/bground.png';

const Home = ({ isDarkMode }) => {
  return (
    <Box id="home" sx={{position: 'relative', overflow: 'hidden' }}>
      
      {/* Hero component above the grey stripe */}
      <Box
        sx={{
          mb: 12,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          zIndex: 3,
          position: 'absolute',
          top: { xs: '10%', sm:'4%', md: '11%' },
          left: { xs: '50%', md: '10%' },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          backgroundColor: 'transparent',
        }}
      >
        <Hero />
      </Box>

      {/* Main content with decorative stripe */}
      <Box
        sx={{
          position: 'relative',
          px: { xs: 3, sm: 4, md: 8 },
          py: { xs: 10, sm: 10, md: 8.5},
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 0, md: 6 },
          backgroundColor: 'background.default', 
          pb: 0, 
          mb: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: '74%', md: '70%' },
            left: 0,
            width: '100%',
            height: { xs: '40%', sm: '32%', md: '40%' },
            backgroundColor: isDarkMode ? '#424242' : '#EFEFEF',
            zIndex: 0,
            transform: 'translateY(-50%)',
          },
        }}
      >
        {/* Left: Image */}
        <Box
          component="img"
          src={bground}
          alt="Zahrea portrait"
          sx={{
            width: { xs: '85%', sm: '62%', md: '32.5%' },
            maxWidth: '500px',
            height: 'auto',
            zIndex: 2,
            position: 'relative',
            mb: { xs: 2, md: 0 },
          }}
        />

        {/* Right: Text Section */}
        <Box
          sx={{
            zIndex: 2,
            maxWidth: { xs: '100%', sm: '85%', md: '55%' },
            textAlign: { xs: 'center',sm:'center',md: 'center' },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center',sm:'center', md: 'center' },
            alignItems: { xs: 'center', md: 'center' },
            minHeight: { xs: '35vh', md: 'auto' }, // matches stripe height
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.15rem', md: '1.15rem' },
              textAlign: { xs: 'center', md: 'center' },
              mb: {sm:4,md:2},
              mt:{sm:5,md:30},
            }}
          >
            Welcome to my little corner of the internet, where tech meets creativity. Here, you'll
            find my journey through the tech world, a showcase of projects I've worked on, and a
            peek into my 'techperience.' Feel free to explore and don't hesitate to reach out.
            I'd love to connect!
          </Typography>

          <Stack
            direction={{ xs: 'row', sm: 'row', md: 'row', lg: 'row' }}
            spacing={3}
            justifyContent={{ xs: 'center', md: 'center' }}
            alignItems="center"
          >
            <Button
              variant="contained"
              startIcon={<InfoIcon />}
              href="#about"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 0.8, sm: 1, md: 1.2 },
                '&:hover': { backgroundColor: '#ffbad3' },
                width: { xs: '45%', sm: 'auto' },
              }}
            >
              Learn More
            </Button>
            <AIAssistant />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
