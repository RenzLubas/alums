'use client'; // Marking the file as a Client Component

import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Alert,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
} from '@mui/material';

export default function LoginPage() {
  const [alumniId, setAlumniId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!email || !password || !alumniId) {
      setError('All fields are required');
      return;
    }

    setError('');
    console.log('Login with:', { alumniId, email, password });

    // Simulating a successful login after a timeout
    setTimeout(() => {
      alert('Login successful');
    }, 1000);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Alumni Management System - Login
        </Typography>

        {/* Show error message if validation fails */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="ALUMNI ID"
                fullWidth
                margin="normal"
                value={alumniId}
                onChange={(e) => setAlumniId(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, fontWeight: 'bold', backgroundColor: 'purple' }}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6} display="flex" justifyContent="flex-start">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end">
            <Link href="#" variant="body2">
              Register for Alumni Sign-up
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
