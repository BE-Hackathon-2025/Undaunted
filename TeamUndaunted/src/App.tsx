// App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar';
import Login from './Login.tsx';
import FlightDetails from './FlightDetails.tsx';
//import { Typography, Container, Grid, Divider, TextField, Switch, Box, Button } from '@mui/material';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Only show flight details after successful login
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/flight" />
            ) : (
              <Login onLoginSuccess={() => setIsAuthenticated(true)} />
            )
          }
        />
        <Route
          path="/flight"
          element={
            isAuthenticated ? (
              <FlightDetails onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;