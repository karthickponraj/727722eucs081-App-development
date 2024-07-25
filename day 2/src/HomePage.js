import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <Container maxWidth="sm" className="home-container">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        className="home-box"
      >
        <Typography variant="h2" gutterBottom>
          Welcome Home
        </Typography>
        <Button component={Link} to="/login" variant="contained" color="primary" className="home-button">
          Login
        </Button>
        <Button component={Link} to="/register" variant="contained" color="secondary" className="home-button">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
