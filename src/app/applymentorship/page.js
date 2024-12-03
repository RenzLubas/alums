'use client';

import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const MentorshipApplication = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [alumniId, setAlumniId] = useState('');
  const [phone, setPhone] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !alumniId || !phone || !areaOfInterest) {
      setError('Please fill in all the fields.');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    setError('');
    setSuccess('Thank you for applying! We will get back to you shortly.');

    // Reset form
    setFullName('');
    setEmail('');
    setAlumniId('');
    setPhone('');
    setAreaOfInterest('');
    setAgreeTerms(false);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Apply for Mentorship Program
        </Typography>

        <Typography variant="body1" paragraph>
          The Mentorship Program offers alumni the opportunity to guide and support fellow alumni or students in their career development. Please fill in the form to apply.
        </Typography>

        {/* Display Error or Success Messages */}
        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ marginBottom: 2 }}>{success}</Alert>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                label="Alumni ID"
                variant="outlined"
                fullWidth
                value={alumniId}
                onChange={(e) => setAlumniId(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Area of Interest"
                variant="outlined"
                fullWidth
                value={areaOfInterest}
                onChange={(e) => setAreaOfInterest(e.target.value)}
                required
              />
            </Grid>

            {/* Terms & Conditions Checkbox */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default MentorshipApplication;
