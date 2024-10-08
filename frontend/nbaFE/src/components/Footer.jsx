

import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footer-social">
          <a href="https://x.com/NBA" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.facebook.com/nba" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/nba/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PlayerPulse All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
