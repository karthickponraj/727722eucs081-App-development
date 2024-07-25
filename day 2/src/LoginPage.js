import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <Container maxWidth="sm" className="login-container">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        className="login-box"
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField label="Email" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" color="primary" fullWidth className="login-button">
          Login
        </Button>
        <Button component={Link} to="/register" color="secondary" className="register-link">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
