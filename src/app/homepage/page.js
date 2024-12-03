'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Container,
  Box,
  Divider,
} from '@mui/material'; // Material UI v5 components

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#424242', minHeight: '100vh' }}> {/* Deep gray background */}
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Alumni Management System
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Forum</Button>
          <Button color="inherit">Events</Button>
          <Button color="inherit">Alumni</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          {/* Welcome Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }} elevation={3}>
              <Typography variant="h4" gutterBottom>
                Welcome to UCLM Alumni Management System
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Connect with your fellow alumni, stay updated on events, share experiences, and contribute to the community. Join us in building a strong alumni network.
              </Typography>
              <Button variant="contained" color="primary" href="/register" sx={{ mt: 2 }}>
                Join Now
              </Button>
            </Paper>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 4, display: 'flex', flexDirection: 'column' }} elevation={3}>
              <Typography variant="h5" gutterBottom>
                Quick Links
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="h6">Events</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Stay updated on upcoming events and reunions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/events" color="primary">
                    View Events
                  </Button>
                </CardActions>
              </Card>

              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">Forum</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Join discussions, share knowledge, and connect with alumni.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/forum" color="primary">
                    Join Forum
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>

        {/* Alumni Testimonials */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Alumni Testimonials
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }} elevation={3}>
                <Typography variant="h6" gutterBottom>
                  "A Great Network"
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  "The alumni system helped me stay in touch with old friends and gave me access to job opportunities."
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  - John Doe, Class of 2010
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }} elevation={3}>
                <Typography variant="h6" gutterBottom>
                  "Amazing Opportunities"
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  "The system provided me with valuable networking opportunities and career advice from senior alumni."
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  - Jane Smith, Class of 2015
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, textAlign: 'center' }} elevation={3}>
                <Typography variant="h6" gutterBottom>
                  "A Lifelong Connection"
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  "I love how the alumni management system keeps us connected even after graduation."
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  - Mark Lee, Class of 2008
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ padding: 2, backgroundColor: '#3f51b5', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; 2024 UCLM Alumni. All Rights Reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Homepage;
