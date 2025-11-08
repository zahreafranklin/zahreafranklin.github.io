import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#F16295', // ButtonAppBar color
      }, 
      secondary: {
        main: '#fff',
        light:'#f5d7e2',
    },
      background: {
        default: '#303030', // General background color
        box:     '#303030',
        paper: '#3b3b3b',   // Card or paper-like elements
      },
      text: {
        primary: '#FFFFFF', // Main text color
        secondary: '#B0B0B0', // Less prominent text
      },
    },
            
  });

export default darkTheme;