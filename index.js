import * as React from 'react';
import { createRoot } from 'react-dom/client';

import {
    createTheme,
    colors,
    ThemeProvider,
    Grid,
    Box
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
            <Box sx={{ height: '10vh', bgcolor: 'primary.main'}} />
          </Grid>
    
          <Grid item size={2} offset={{ xs: 2}}>
            <Box sx={{ height: '45vh', bgcolor: 'secondary.main' }}/>
          </Grid>
    
          <Grid item size={6}>
            <Box sx={{ height: '45vh', bgcolor: 'success.main'}} />
          </Grid>
    
          <Grid item size={6} offset={{ xs: 2}}>
            <Box sx={{ height: '45vh', bgcolor: 'warning.main'}} />
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