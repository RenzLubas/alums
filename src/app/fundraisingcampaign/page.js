'use client';

import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  TextField,
  Box,
  Alert,
  Divider,
} from '@mui/material';

const FundraisingCampaign = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!donationAmount || isNaN(donationAmount) || parseFloat(donationAmount) <= 0) {
      setError('Please enter a valid donation amount.');
      return;
    }

    // Reset error message and show success
    setError('');
    setSuccess(`Thank you for your donation of ₱${donationAmount}.`);

    // Reset donation amount field
    setDonationAmount('');
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Fundraising Campaign for UCLM Alumni Network
        </Typography>

        <Typography variant="body1" paragraph>
          Join us in building a stronger alumni network and support educational
          initiatives at UCLM. Your generous donation will help fund scholarships,
          events, and professional development programs for current and future students.
        </Typography>

        {/* Display the error or success message */}
        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ marginBottom: 2 }}>{success}</Alert>}

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box sx={{ padding: 3, backgroundColor: '#f7f7f7', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>
                Campaign Goal: ₱50,000
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                We are aiming to raise ₱50,000 to fund scholarships for deserving students and enhance alumni engagement activities.
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography variant="body2" color="textSecondary">
                Total Raised: ₱25,000
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Donation Form */}
        <form onSubmit={handleDonate}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Enter Donation Amount"
                variant="outlined"
                fullWidth
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                required
                type="number"
                InputProps={{
                  startAdornment: '₱',
                }}
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
                Donate Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default FundraisingCampaign;
