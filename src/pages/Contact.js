import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Paper } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const Contact = ({ isDarkMode }) => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: '100vh',
        pt: 5, // offset for sticky navbar
        px: { xs: 2, sm: 4, md: 6 },
        display: 'flex',
         backgroundColor: 'background.default', 
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 200,
            fontSize: { xs: '35px', sm: '45px', md: '50px' },
            fontFamily: 'Majesty',
            mb: 2,
          }}
        >
          contact <Box component="span" sx={{ color: '#ff69b4' }}>me</Box>
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 5 },
           // backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff',
          }}
        >
          <Grid container spacing={4}>
            {/* Left Column – Contact Info */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Le Jour Serif' }}>
                Contact Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                <AlternateEmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> zahrea.franklin@gmail.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                <HomeIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> New Jersey, USA
              </Typography>
              <Typography variant="body1" gutterBottom>
                <LanguageIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> zahreafranklin.github.io
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 1, fontFamily: 'Le Jour Serif', fontSize: '18px' }}>
                  Connect with Me :
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    href="https://github.com/zahreafranklin"
                    target="_blank"
                    sx={{
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      padding: 0,
                      borderRadius: 1,
                      color: "#FFFFFF",
                      backgroundColor: "#FD93B9",
                      '&:hover': { backgroundColor: isDarkMode ? '#555' : '#f0f0f0' },
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                  </Button>

                  <Button
                    variant="outlined"
                    href="https://linkedin.com/in/zahrea-franklin"
                    target="_blank"
                    sx={{
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      padding: 0,
                      borderRadius: 1,
                      color: "#FFFFFF",
                      backgroundColor: "#FD93B9",
                      '&:hover': { backgroundColor: isDarkMode ? '#555' : '#f0f0f0' },
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </Button>

                  <Button
                    variant="outlined"
                    href="https://x.com/zahreafranklin"
                    target="_blank"
                    sx={{
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      padding: 0,
                      borderRadius: 1,
                      color: "#FFFFFF",
                      backgroundColor: "#FD93B9",
                      '&:hover': { backgroundColor: isDarkMode ? '#555' : '#f0f0f0' },
                    }}
                  >
                    <TwitterIcon fontSize="small" />
                  </Button>

                  <Button
                    variant="outlined"
                    href="https://zahreafranklin.substack.com/"
                    target="_blank"
                    sx={{
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      padding: 0,
                      borderRadius: 1,
                      color: "#FFFFFF",
                      backgroundColor: "#FD93B9",
                      '&:hover': { backgroundColor: isDarkMode ? '#555' : '#f0f0f0' },
                    }}
                  >
                    <CardMembershipIcon fontSize="small" />
                  </Button>
                </Stack>
              </Box>
            </Grid>

            {/* Right Column – Message + Button */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Le Jour Serif', fontSize: '20px' }}>
                Let’s Get in Touch
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem' }}>
                Thank you for wanting to reach out! My mailbox is always open — whether you have a question or just want to say hi, I'll try my best to get back to you!
              </Typography>
              <Button
                variant="contained"
                component="a"
                href="mailto:zahrea.franklin@gmail.com"
                sx={{ mt: 2, '&:hover': { backgroundColor: '#ffbad3' } }}
              >
                Send a Message
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
