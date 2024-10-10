import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { UserContextProvider } from '../context/userContext';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Toaster } from 'react-hot-toast'
import PlayerStats from './pages/PlayerStats';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true




function App() {


  return (
    <UserContextProvider>
<div className="App">


  
  <Navbar />
  <Toaster position='bottom-right' toastOptions={{duration: 6000}} />



  <Routes>
  <Route path="/" element={<Home />}  />
  <Route path="/register" element={<Register />}  />
  <Route path="/login" element={<Login />}  />
  <Route path="/dashboard" element={<Dashboard />}  />
  <Route path="/contact" element={<Contact />}  />
  <Route path="/player-stats" element={<PlayerStats />} /> 

  </Routes>
</div>



</UserContextProvider>
  );
}

export default App;