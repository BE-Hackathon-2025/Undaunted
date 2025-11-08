import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import AppBar from "./components/AppBar.tsx";
import { TextField, Typography, Container, Divider, Switch, Box, Button, Grid } from '@mui/material';


function App() {
  const [airportName, setAirportName] =useState ('')
  const [departTime, setDepartTime] = useState('')
  const [departDate, setDepartDate] =useState('')
  const [location, setLocation] = useState('')
  const [checkedBag, setCheckedBag] = useState(false)
  const [assistance, setAssistance] = useState(false)


  //const handleAirportInput = (event) => {
  //  setAirportName(event.target.value);
  //}

  function handleChange1 (){
    // toggle response if user needs assistance
    console.log("Assistance needed")
    setAssistance(!assistance);
  }

   function handleChange2 (){
    // toggle response if user checks a bag
    console.log("checked bag")
    setCheckedBag(!checkedBag)
  }

  function handleClick (){
    console.log("you submitted:", {
    airportName, departDate, departTime, location, checkedBag, assistance
    })

  }

  return (
    <>
    <AppBar/>
    <Typography variant='h3'>Flight Details</Typography>

    <Grid container>
    <Typography variant='h4'> Departure Airport <TextField id='filled-basic' ></TextField></Typography>
    </Grid>

    <Divider sx={{ mb: 4}}/>

    <Grid container>
    <Typography variant='h4'> 
      Departure Time 
      <TextField id='filled-basic' label='--:--' value={departTime}></TextField>
    </Typography>
    <Typography variant='h4'> 
      Departure Date 
      <TextField id='filled-basic' label="mm/dd/yyyy" value={departDate}></TextField>
    </Typography>
    </Grid>
    <Divider sx={{ mb: 4}}/>

    <Grid container>
    <Typography variant='h4'>
       Starting Location 
      <TextField id='filled-basic' label='Home, Hotel' value = {location}></TextField>
      </Typography>
    </Grid>

    <Divider sx={{mb:4}}/>

    <Grid >
    <Typography variant='h5'> Accesibility</Typography>

    <Typography variant='h4'> Do you require a wheel chair or assistance? </Typography>
      <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="body1">No</Typography>
      <Switch color="primary" onChange={handleChange1} />
      <Typography variant="body1">Yes</Typography>
    </Box>

    <Typography variant='h4'> Check Bag</Typography>
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="body1">No</Typography>
      <Switch color="primary" onChange={handleChange2}/>
      <Typography variant="body1">Yes</Typography>
    </Box>
    </Grid>

   <Container sx={{ display: 'flex', mt:5, justifyContent:'center'}}>
      <Button variant='contained' onClick={handleClick} size='large' sx={{backgroundColor: 'primary'}} >
        Calculate Arrival Time
     </Button>
    </Container>

    </>
  )
}

export default App
