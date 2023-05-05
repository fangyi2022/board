import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Dashboard from './Dashboard';

function Copyright() {
  return (
    // <Typography variant="body2" color="text.secondary" align="center">
      <Dashboard />
    // </Typography>
  );
}

export default function App() {
  return <Dashboard />
  return (
    <Container maxWidth="sm">
      <Dashboard />
      {/* <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box> */}
    </Container>
  );
}
