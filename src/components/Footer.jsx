
import './footer.css'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {

  const scrollToTop = ()=>{
    window.screenTop(0,0)
  }

  
  return (
    <div className="footer-section">
      <div className="footer-info">
        <div className="footer-contact">
          <h2>Contact Info</h2>
          <p>Mr.Prashant Neupane</p>
          <p>Phone: +977-9857-830033</p>
          <p>Email: prashantneupane@gmail.com</p>

        </div>
        <div className="footer-link">
        <h2>Quick Links</h2>
         
        <ul>
       

        <li><NavLink to="/" onClick={scrollToTop}>Home</NavLink></li>
        <li><NavLink to="/booking"  onClick={scrollToTop} >Booking</NavLink></li>
        <li><NavLink to="/about"  onClick={scrollToTop}>About</NavLink></li>
        <li><NavLink to="booking"  onClick={scrollToTop} >Contact</NavLink></li>
      
      </ul>
        </div>

        <div className="footer-connect">
          <h2>Contect With Us</h2>
          <ul>
            <li className='social-media-icon'><FaFacebook /></li>
            <li className='social-media-icon'><FaXTwitter /></li>
          </ul>
          <p></p>
        </div>

       
      </div>

  
    <footer className="footer">
      <p>&copy; 2025 Hotel Booking. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;
