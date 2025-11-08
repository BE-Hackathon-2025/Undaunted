// Login.tsx


import React, { useState, FC } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const originalPost = axios.post;
axios.post = async (url: string, data: any) => {
console.log("Mock POST", url, data);
    if (url === "/register") return { data: { message: "Verification code sent!", success: true } };
    if (url === "/login") return { data: { success: true, name: "Mock User" } };
    if (url === "/verify") return { data: { success: true, message: "Verified!" } };
    return originalPost(url, data);
};


interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: FC<LoginProps> = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /@(spelman\.edu|morehouse\.edu)$/;
    if (!emailPattern.test(email)) {
      setMessage('Email must end with @spelman.edu or @morehouse.edu.');
      return;
    }
    try {
      const response = await axios.post('/register', { name, email, password });
      setMessage(response.data.message || 'Verification code sent to your email!');
      setIsEmailSent(true);
    } catch (error: any) {
      setMessage('Error during registration: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      if (response.data.success) {
        setMessage('Login successful!');
        onLoginSuccess(); // ✅ notify App.tsx
      } else {
        setMessage(response.data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error: any) {
      setMessage('Error during login: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleVerifyEmail = async () => {
    try {
      const response = await axios.post('/verify', { email, verificationCode });
      setMessage(response.data.message || 'Email verified successfully!');
      if (response.data.success) {
        setIsVerified(true);
        onLoginSuccess(); // ✅ once verified, go to App
      }
    } catch {
      setMessage('Invalid verification code.');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>

      {!isEmailSent ? (
        <>
          <Box sx={{ mb: 2 }}>
            <Button
              variant={authMode === 'register' ? 'contained' : 'outlined'}
              onClick={() => setAuthMode('register')}
              sx={{ mr: 1 }}
            >
              Register
            </Button>
            <Button
              variant={authMode === 'login' ? 'contained' : 'outlined'}
              onClick={() => setAuthMode('login')}
            >
              Login
            </Button>
          </Box>

          <form onSubmit={authMode === 'register' ? handleRegister : handleLogin}>
            {authMode === 'register' && (
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
              />
            )}
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              {authMode === 'register' ? 'Register' : 'Login'}
            </Button>
          </form>
        </>
      ) : (
        <Box>
          <Typography>Enter Verification Code</Typography>
          <TextField
            fullWidth
            label="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            margin="normal"
          />
          <Button onClick={handleVerifyEmail} variant="contained" color="primary" fullWidth>
            Verify
          </Button>
        </Box>
      )}

      {message && (
        <Typography color="error" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default Login;
