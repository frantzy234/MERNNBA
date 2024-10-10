import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerLinks">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="footerSocial">
          <a href="https://x.com/NBA" target="_blank" rel="">Twitter</a>
          <a href="https://www.facebook.com/nba" target="_blank" rel="">Facebook</a>
          <a href="https://www.instagram.com/nba/?hl=en" target="_blank" rel="">Instagram</a>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2024 Above The Rim All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

