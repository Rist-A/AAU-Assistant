import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // AAU blue
    },
    secondary: {
      main: '#FFD700', // AAU gold
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
      </Box>
    </ThemeProvider>
  );
}

export default App;