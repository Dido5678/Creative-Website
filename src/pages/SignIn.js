import { useState } from 'react';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button
} from '@mui/material';



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  // console.log(formData);
  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = '';


    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = value.match(emailRegex) ? '' : 'Invalid email address';
    }

    if (name === 'password') {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      error = value.match(passwordRegex)
        ? ''
        : 'Password must be at least 8 characters, with one uppercase, one lowercase, and one digit.';
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{}}>
        <Typography variant="h5">
          Sign in
        </Typography>
        <Box component="form"
          // onSubmit={handleLogin}
          sx={{
            display: 'grid',
            gap: '20px'
          }}>
          <div>
            <TextField
              name='email'
              fullWidth
              type="email"
              label="Email"
              placeholder='Email'
              onChange={handleInputChange}
            /><span style={{ color: 'red' }}>{errors.email}</span>
          </div>
          <div>
            <TextField
              name='password'
              fullWidth
              type="password"
              label="Password"
              placeholder='Password'
              onChange={handleInputChange}
            /><span style={{ color: 'red' }}>{errors.password}</span>
          </div>
          <div>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  )
};


export default Login;