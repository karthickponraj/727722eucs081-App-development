import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <Container maxWidth="sm" className="register-container">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        className="register-box"
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <TextField label="Email" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <TextField label="Confirm Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" color="primary" fullWidth className="register-button">
          Register
        </Button>
        <Button component={Link} to="/login" color="secondary" className="login-link">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterPage;
