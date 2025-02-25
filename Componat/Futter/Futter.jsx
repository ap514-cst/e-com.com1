import React from 'react'
import './Futter.css';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Futter = () => {
  return (
    <div className='footer'>
       <div className='footer-logo'>
        
       </div>
       <ul className='footer-link'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className='footer-social-icon'>
          <div className='footer-icons-container'>
            <a href=""><FaWhatsappSquare /></a>
          </div>
          <div className='footer-icons-container'>
            <a href=""><FaSquareInstagram/></a>
          </div>
          <div className='footer-icons-container'>
            <a href="https://www.facebook.com/apo.mojumder/"><FaFacebookSquare /></a>
          </div>
       </div>
       <div className='footer-copyright'>
          <hr />
          <p>Copyright @ 2025 - All-right</p>
       </div>
    </div>
  )
}

export default Futter
