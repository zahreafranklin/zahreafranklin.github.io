
import {createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
     primary: {
         main:'#FD93B9',
     },
     secondary: {
        main: '#fff5f9',
        light:'#f5d7e2',
    },
    background: {
        default: '#fff', // General background color
        paper: '#fff',   // Card or paper-like elements
      },
   
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
  });

  export default theme; 