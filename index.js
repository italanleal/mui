import * as React from 'react';
import { createRoot } from 'react-dom/client';

import {
    createTheme,
    colors,
    ThemeProvider,
    Grid,
    Box,
    Typography,
    Button,
    Stack
} from '@mui/material';

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
        main: '#556cd6',
        white: '#ffffff'
        },
        secondary: {
        main: '#19857b',
        alternative: '#f4D242'
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
              <Box sx={{ height: '8vh', bgcolor: 'primary.white'}} >
              
              </Box>
            </Grid>
            <Grid item size={2} offset={{ xs: 2}}>
            <Box p={2} sx={{ height: '45vh', bgcolor: 'success.main'}} >
              <ColorButtons />
            </Box>
            </Grid>
      
            <Grid item size={6}>
            <Tipografia />
            </Grid>
      
            <Grid item size={6} offset={{ xs: 2}}>
              <Box sx={{ height: '45vh', bgcolor: 'warning.main'}} >
                <Layout />
              </Box>
            </Grid>
      
            <Grid item size={2}>
              <Box sx={{ height: '45vh', bgcolor: 'error.main'}} />
            </Grid>
      
            <Grid item size={12}>
              <Box sx={{ height: '25vh', bgcolor: 'primary.white'}} />
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

function ColorButtons() {
    return (
      <Stack direction="column" spacing={2}>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button color="secondary.alternative">Secondary</Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    );
  }

function Layout(){
  return (
    <Stack direction="row" spacing={2} p={2} alignItems="center" justifyContent="center" sx={{height: "45vh"}}>
      <Box>
        <Box sx={{ height: '30vh', width: '15vw', borderRadius: 1,  bgcolor: 'primary.main'}}></Box>
      </Box>
      <Box alignItems="center">
          <Stack direction="column" spacing={2} >
            <Box sx={{ height: '10vh', width: '15vw', bgcolor: 'primary.main',  borderRadius: 2,}}></Box>
            <Box sx={{ height: '10vh', width: '15vw', bgcolor: 'primary.main',  borderRadius: 2,}}></Box>
            <Box sx={{ height: '10vh', width: '15vw', bgcolor: 'primary.main',  borderRadius: 2,}}></Box>
          </Stack>
        
      </Box>
      <Box>
        <Grid container spacing={'8px'}>
          <Grid item size={6}>
            <Box sx={{ height: 150, width: 150, bgcolor: 'error.main', borderRadius: 2,}} />
          </Grid>
          <Grid item size={6}>
            <Box sx={{ height: 150, width: 150, bgcolor: 'error.main',  borderRadius: 2,}} />
          </Grid>
          <Grid item size={12}>
            <Box sx={{ height: 100, width: 308, bgcolor: 'error.main',  borderRadius: 2,}} />
          </Grid>
          <Grid item size={12}>
            <Box sx={{ height: 100, width: 308, bgcolor: 'error.main',  borderRadius: 2,}} />
          </Grid>
        </Grid>
      </Box>
    </Stack>

  );
}
