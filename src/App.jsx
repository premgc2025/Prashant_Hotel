import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

import Footer from './components/Footer';

import About from './pages/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
