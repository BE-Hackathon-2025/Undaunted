import { FC, useState } from 'react';
import { Typography, Container, Grid, Divider, TextField, Switch, Box, Button } from '@mui/material';
import AppBar from './components/AppBar';

interface Props {
  onLogout: () => void;
}

const FlightDetails: FC<Props> = ({ onLogout }) => {
  const [departTime, setDepartTime] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [location, setLocation] = useState('');
  const [checkedBag, setCheckedBag] = useState(false);
  const [assistance, setAssistance] = useState(false);

  function handleSubmit() {
    console.log({ departTime, departDate, location, checkedBag, assistance });
  }

  return (
    <>
      <AppBar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Flight Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Departure Time"
              value={departTime}
              onChange={(e) => setDepartTime(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Departure Date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Starting Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant="h5">Accessibility</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography>No</Typography>
            <Switch onChange={() => setAssistance(!assistance)} />
            <Typography>Yes</Typography>
          </Box>

          <Typography variant="h5" sx={{ mt: 2 }}>
            Check Bag
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography>No</Typography>
            <Switch onChange={() => setCheckedBag(!checkedBag)} />
            <Typography>Yes</Typography>
          </Box>
        </Box>

        <Container sx={{ display: 'flex', mt: 5, justifyContent: 'center' }}>
          <Button variant="contained" onClick={handleSubmit}>
            Calculate Arrival Time
          </Button>
          <Button variant="outlined" sx={{ ml: 2 }} onClick={onLogout}>
            Logout
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default FlightDetails;
