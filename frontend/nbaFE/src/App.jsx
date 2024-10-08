import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import { Toaster } from 'react-hot-toast'
import PlayerStats from './pages/PlayerStats';
import Register from './pages/Register';
import Login from './pages/Login';


axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true




function App() {


  return (
    <>
<div className="App">


  
  <Navbar />
  <Toaster position='bottom-right' toastOptions={{duration: 7000}} />



  <Routes>
  <Route path="/" element={<Home />}  />
  <Route path="/register" element={<Register />}  />
  <Route path="/login" element={<Login />}  />
  <Route path="/contact" element={<Contact />}  />
  <Route path="/player-stats" element={<PlayerStats />} /> 

  </Routes>
</div>



    </>
  );
}

export default App;