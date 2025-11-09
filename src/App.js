// App.js
import './App.css';
import './assets/fonts.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import darkTheme from './darkTheme.js';

import ButtonAppBar from './components/ButtonAppBar.js';
import NavBar from './components/NavBar.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Skills from './pages/Skills.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <div
        className="App"
        style={{
          backgroundColor: isDarkMode ? '#3b3b3b' : '#fff',
          color: isDarkMode ? '#FFFFFF' : '#000000',
        }}
      >
        <ButtonAppBar onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
        <NavBar isDarkMode={isDarkMode} />

        {/* Sections stacked on one page */}
        <Home isDarkMode={isDarkMode} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
