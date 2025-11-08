// components/NavBar.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../images/newlogo.png';

export default function NavBar({ isDarkMode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  // Scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {sections.map((text) => (
          <ListItem key={text} onClick={() => handleScroll(text)}>
            <ListItemText
              primary={text.charAt(0).toUpperCase() + text.slice(1)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
     <Box sx={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: isDarkMode ? '#303030' : '#fff',
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" width="140" height="auto" />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {sections.map((text) => (
              <Button key={text} color="inherit" onClick={() => handleScroll(text)}>
                {text.charAt(0).toUpperCase() + text.slice(1)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
