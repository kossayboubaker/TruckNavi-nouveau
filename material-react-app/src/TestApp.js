import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography } from '@mui/material';
import premiumTheme from 'assets/theme/premiumTheme';

function TestApp() {
  return (
    <ThemeProvider theme={premiumTheme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a0d2e 0%, #0f0f23 100%)'
      }}>
        <Typography variant="h2" sx={{ color: 'white', textAlign: 'center' }}>
          Premium Transport Management System
          <br />
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mt: 2 }}>
            The application is loading...
          </Typography>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default TestApp;
