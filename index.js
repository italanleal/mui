import * as React from 'react';
import { createRoot } from 'react-dom/client';

import {
    createTheme,
    colors,
    ThemeProvider,
    Grid,
    Box,
    Typography,
} from '@mui/material';

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
        main: '#556cd6',
        },
        secondary: {
        main: '#19857b',
        },
        error: {
        main: colors.red.A400,
        }
    }
});
    
const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

function App() { 
    return (
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={'8px'}>
            <Grid item size={12}>
              <Box sx={{ height: '8vh', bgcolor: 'primary.main'}} />
            </Grid>
            <Grid item size={2} offset={{ xs: 2}}>
            <Box p={2} sx={{ height: '45vh', bgcolor: 'success.main'}} />
            </Grid>
      
            <Grid item size={6}>
              <Tipografia />
              
            </Grid>
      
            <Grid item size={6} offset={{ xs: 2}}>
              <Box sx={{ height: '45vh', bgcolor: 'warning.main'}} >
              </Box>
            </Grid>
      
            <Grid item size={2}>
              <Box sx={{ height: '45vh', bgcolor: 'error.main'}} />
            </Grid>
      
            <Grid item size={12}>
              <Box sx={{ height: '25vh', bgcolor: 'info.main'}} />
            </Grid>
        </Grid>
      </Box>   
      );
}

function Tipografia() {
  return (
    <Box p={2} sx={{ height: '45vh', bgcolor: 'secondary.main' }}>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
        button text
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
        caption text
      </Typography>
      <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
        overline text
      </Typography>
  </Box>
  );
}
