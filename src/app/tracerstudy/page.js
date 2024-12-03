'use client';

import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
  Paper,
  Divider,
} from '@mui/material';

const TracerStudyForm = () => {
  const [alumniName, setAlumniName] = useState('');
  const [alumniId, setAlumniId] = useState('');
  const [email, setEmail] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [yearOfGraduation, setYearOfGraduation] = useState('');
  const [isCurrentlyEmployed, setIsCurrentlyEmployed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!alumniName || !alumniId || !email || !yearOfGraduation) {
      setError('Please fill in all the required fields.');
      return;
    }

    setError('');
    // Normally, here you would send the data to a server
    alert('Tracer Study Submitted Successfully!');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center">
          Tracer Study Form
        </Typography>

        {/* Show error message if validation fails */}
        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Alumni Name */}
            <Grid item xs={12}>
              <TextField
                label="Alumni Name"
                fullWidth
                value={alumniName}
                onChange={(e) => setAlumniName(e.target.value)}
                required
              />
            </Grid>

            {/* Alumni ID */}
            <Grid item xs={12}>
              <TextField
                label="Alumni ID"
                fullWidth
                value={alumniId}
                onChange={(e) => setAlumniId(e.target.value)}
                required
              />
            </Grid>

            {/* Email Address */}
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>

            {/* Year of Graduation */}
            <Grid item xs={12}>
              <TextField
                label="Year of Graduation"
                type="number"
                fullWidth
                value={yearOfGraduation}
                onChange={(e) => setYearOfGraduation(e.target.value)}
                required
              />
            </Grid>

            {/* Employment Status */}
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Employment Status</InputLabel>
                <Select
                  value={employmentStatus}
                  onChange={(e) => setEmploymentStatus(e.target.value)}
                  label="Employment Status"
                >
                  <MenuItem value="Employed">Employed</MenuItem>
                  <MenuItem value="Unemployed">Unemployed</MenuItem>
                  <MenuItem value="Self-Employed">Self-Employed</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Current Company */}
            {employmentStatus === 'Employed' && (
              <Grid item xs={12}>
                <TextField
                  label="Current Company"
                  fullWidth
                  value={currentCompany}
                  onChange={(e) => setCurrentCompany(e.target.value)}
                  required={employmentStatus === 'Employed'}
                />
              </Grid>
            )}

            {/* Job Title */}
            {employmentStatus === 'Employed' && (
              <Grid item xs={12}>
                <TextField
                  label="Job Title"
                  fullWidth
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </Grid>
            )}

            {/* Currently Employed Checkbox */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCurrentlyEmployed}
                    onChange={() => setIsCurrentlyEmployed(!isCurrentlyEmployed)}
                  />
                }
                label="Are you currently employed?"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Tracer Study
              </Button>
            </Grid>
          </Grid>
        </form>

        <Divider sx={{ margin: '16px 0' }} />
        <Typography variant="body2" color="textSecondary" align="center">
          Thank you for participating in our tracer study. Your information helps us improve our alumni network and services.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TracerStudyForm;
