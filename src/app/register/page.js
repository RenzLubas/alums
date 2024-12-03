'use client';  // Mark the file as a client-side component

import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Alert,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';

export default function RegisterPage() {
  const [alumniId, setAlumniId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentWork, setCurrentWork] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !alumniId ||
      !firstName ||
      !lastName ||
      !gender ||
      !batch ||
      !course ||
      !email ||
      !password ||
      !confirmPassword ||
      !currentWork ||
      !department
    ) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    console.log('Register with:', {
      alumniId,
      firstName,
      lastName,
      gender,
      batch,
      course,
      email,
      password,
      confirmPassword,
      currentWork,
      department,
    });

    setTimeout(() => {
      alert('Registration successful');
    }, 1000); 
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'purple' }}
        >
          Alumni Management System
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Alumni ID"
                fullWidth
                margin="normal"
                value={alumniId}
                onChange={(e) => setAlumniId(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                margin="normal"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth sx={{ backgroundColor: '#f5f5f5' }}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Batch"
                fullWidth
                margin="normal"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Course"
                fullWidth
                margin="normal"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
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
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Current Work"
                fullWidth
                margin="normal"
                value={currentWork}
                onChange={(e) => setCurrentWork(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Department"
                fullWidth
                margin="normal"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, fontWeight: 'bold', backgroundColor: 'purple' }}
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
