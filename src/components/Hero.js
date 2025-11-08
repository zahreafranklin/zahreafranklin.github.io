/* 
Contains hero banner with moving text
*/
import {React, useState, useEffect} from 'react'

import { Box, Typography } from '@mui/material';

const Hero = () => {
    const words = ['SOFTWARE ENGINEER', 'FRONT-END DEVELOPER', 'TECH - FLUENCER', 'DATA ANALYST']; // Words to display
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Tracks the current word
  const [fade, setFade] = useState(true); // Controls the fade effect

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        // Switch to the next word after fade-out completes
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true); // Start fading in
      }, 1000); // Match this to the fade-out animation duration
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <Box
    sx={{
      justifyContent: 'center', // Align content to the right
      alignItems: 'center', // Vertically center the content
      textAlign: 'justify', // Right-align the text
      height: '100%', // Ensure full height for vertical alignment
      color: 'text.primary',
      zIndex:1,
      mt:{ sm:80, md:25, lg: 25, },
      mx: { md: 43, lg: 77 },
      display: { xs: 'none', sm: 'block', md:'block',lg:'block'}
     
    }}
  >
    <Box sx={{ width:500, textAlign: { xs: 'center', sm: 'center' } }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Le Jour Serif',
          mb:1,
          whiteSpace: 'nowrap',
          display: 'block',
          fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' }, // Responsive font size
            opacity: fade ? 1 : 0, // Use opacity for fade-in/out effect
            transition: 'opacity 1s ease-in-out', // Smooth fade-in/out
        }}
      >
       {words[currentWordIndex]} {/* Display the current word */}

        </Typography>
        
      </Box>
      
    </Box>
  );
};


export default Hero