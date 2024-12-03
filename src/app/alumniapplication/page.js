'use client';

import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Box,
} from '@mui/material';

const MentorshipApplication = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [mentorshipArea, setMentorshipArea] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !email || !profession || !mentorshipArea) {
      setError('Please fill in all the fields.');
      return;
    }

    setError('');
    setSuccess('Your mentorship application has been successfully submitted!');
    
    // Reset form fields
    setName('');
    setEmail('');
    setProfession('');
    setMentorshipArea('');
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Alumni Mentorship Program Application
        </Typography>

        {/* Show success or error message */}
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Profession"
                variant="outlined"
                fullWidth
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Area of Mentorship</InputLabel>
                <Select
                  value={mentorshipArea}
                  onChange={(e) => setMentorshipArea(e.target.value)}
                  label="Area of Mentorship"
                >
                  <MenuItem value="Career Guidance">Career Guidance</MenuItem>
                  <MenuItem value="Entrepreneurship">Entrepreneurship</MenuItem>
                  <MenuItem value="Networking">Networking</MenuItem>
                  <MenuItem value="Technical Skills">Technical Skills</MenuItem>
                  <MenuItem value="Personal Development">Personal Development</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Apply for Mentorship
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default MentorshipApplication;
