import { NavLink} from 'react-router-dom';
import './Navbar.css';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <div className="logo">Prashant`s Hotel Logo! Here</div>
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/booking" >Booking</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      </div>
     
    </nav>
  );
};

export default Navbar;
