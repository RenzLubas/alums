'use client';

import React from 'react';
import { Container, Grid, Typography, Button, Paper, Box } from '@mui/material';

const events = [
  {
    id: 1,
    title: 'UCLM Alumni Homecoming 2024',
    description: 'Join us for a grand celebration of UCLM alumni as we reconnect and celebrate our achievements.',
    date: 'March 10, 2024',
  },
  {
    id: 2,
    title: 'Career Development Webinar',
    description: 'An insightful webinar focused on career growth, job opportunities, and personal development.',
    date: 'April 15, 2024',
  },
  {
    id: 3,
    title: 'Annual Charity Gala',
    description: 'An elegant evening event with alumni coming together to raise funds for a good cause.',
    date: 'June 20, 2024',
  },
];

const EventsPage = () => {
  return (
    <Container
      sx={{
        marginTop: 4,
        backgroundColor: '#212121', // Dark gray background
        borderRadius: 2,
        padding: 4,
      }}
    >
      {/* Header with navigation buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Button color="primary">Home</Button>
          <Button color="primary">Forum</Button>
          <Button color="primary">Events</Button>
          <Button color="primary">Alumni</Button>
          <Button color="primary">About</Button>
        </Box>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            height: 40,
            backgroundColor: '#9C27B0', // Purple background for the profile button
            '&:hover': {
              backgroundColor: '#7B1FA2', // Darker purple on hover
            },
          }}
        >
        User
        </Button>
      </Box>

      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: '#fff', // White color for text
        }}
      >
        Upcoming Alumni Events
      </Typography>

      {/* Event Cards */}
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                backgroundColor: '#424242', // Darker background for event cards
                color: '#fff', // White text color for contrast
                '&:hover': {
                  backgroundColor: '#616161', // Hover effect for cards
                },
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  color: '#9C27B0', // Purple title for events
                }}
              >
                {event.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  color: '#B0BEC5', // Light gray description text
                }}
              >
                {event.description}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  color: '#B0BEC5', // Light gray date text
                }}
              >
                Date: {event.date}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  backgroundColor: '#9C27B0', // Purple background for button
                  '&:hover': {
                    backgroundColor: '#7B1FA2', // Darker purple on hover
                  },
                }}
              >
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsPage;
