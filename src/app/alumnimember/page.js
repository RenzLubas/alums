'use client';

import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
  Alert,
} from '@mui/material';

const alumniData = [
  { id: 'A001', name: 'John Doe', email: 'john.doe@example.com', graduationYear: 2012, job: 'Software Engineer' },
  { id: 'A002', name: 'Jane Smith', email: 'jane.smith@example.com', graduationYear: 2012, job: 'Marketing Manager' },
  { id: 'A003', name: 'Mark Lee', email: 'mark.lee@example.com', graduationYear: 2012, job: 'Product Designer' },
  { id: 'A004', name: 'Emily Brown', email: 'emily.brown@example.com', graduationYear: 2012, job: 'Data Scientist' },
];

const AlumniSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!searchTerm) {
      setError('Please enter a search term.');
      return;
    }

    setError('');
    const filtered = alumniData.filter(
      (alumni) =>
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      setError('No alumni found with that search term.');
    } else {
      setFilteredAlumni(filtered);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Alumni Member Search
        </Typography>

        {/* Show error message if validation fails */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* Search Bar */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <TextField
              label="Search by Name or Alumni ID"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>

        {/* Results Table */}
        {filteredAlumni.length > 0 && (
          <Box sx={{ marginTop: 4 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Alumni ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Graduation Year</TableCell>
                    <TableCell>Job Title</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAlumni.map((alumni) => (
                    <TableRow key={alumni.id}>
                      <TableCell>{alumni.id}</TableCell>
                      <TableCell>{alumni.name}</TableCell>
                      <TableCell>{alumni.email}</TableCell>
                      <TableCell>{alumni.graduationYear}</TableCell>
                      <TableCell>{alumni.job}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default AlumniSearch;
