import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import AppBar from "./components/AppBar.tsx";

import { TextField, Typography, Container } from '@mui/material';

function App() {

  return (
    <>
    <AppBar/>

    <Container>
    <Typography variant='h3'> Airport <TextField id='filled-basic'></TextField></Typography>
    </Container>

    <Typography variant='h3'> Departure Time</Typography>
    <Typography variant='h3'> Departure Date</Typography>
    <Typography variant='h3'> Current Location</Typography>

    <Typography variant='h3'> Accesibility Settings</Typography>
    <Typography variant='h3'> Check Bag</Typography>



    </>
  )
}

export default App
