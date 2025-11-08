import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import AppBar from "./components/AppBar.tsx";
import { TextField, Typography, Container, Divider, Switch, Box, Button } from '@mui/material';

function App() {
  //const [airportName, setAirportName] =useState ('')

  //const handleAirportInput = (event) => {
  //  setAirportName(event.target.value);
  //}

  function handleChange1 (){
    // toggle response if user needs assistance
    console.log("Assistance needed")
  }

   function handleChange2 (){
    // toggle response if user checks a bag
    console.log("checked bag")
  }

  function handleClick (){
    console.log("you submitted")
  }

  return (
    <>
    <AppBar/>

    <Container>
    <Typography variant='h3'> Airport <TextField id='filled-basic' ></TextField></Typography>
    </Container>
    <Divider />

    <Container>
    <Typography variant='h3'> Departure Time <TextField id='filled-basic'></TextField></Typography>
    </Container>

    <Container>
    <Typography variant='h3'> Departure Date <TextField id='filled-basic'></TextField></Typography>
     <Divider />
    </Container>

    <Container>
    <Typography variant='h3'> Current Location <TextField id='filled-basic'></TextField></Typography>
     <Divider />
    </Container>

    <Container>
    <Typography variant='h4'> Accesibility Settings</Typography>
    <Typography variant='h3'> Do you require a wheel chair or assistance? </Typography>
      <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="body1">No</Typography>
      <Switch color="primary" onChange={handleChange1} />
      <Typography variant="body1">Yes</Typography>
    </Box>

    <Typography variant='h3'> Check Bag</Typography>
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="body1">No</Typography>
      <Switch color="primary" onChange={handleChange2}/>
      <Typography variant="body1">Yes</Typography>
    </Box>
    </Container>

   <Container sx={{width: '100%', display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <Button variant='contained' onClick={handleClick} sx={{backgroundColor: '#000000', marginY:10}} >
        Submit
     </Button>
    </Container>

    </>
  )
}

export default App
