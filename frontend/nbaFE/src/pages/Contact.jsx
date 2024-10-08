import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
   
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Please fill out the form below.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: contact@yourwebsite.com</p>
        <p>Phone: (123) 456-7890</p> 
      </div>

  
      <div className="support-links">
        <h3>Support Links</h3>
        <ul>
          <li>
            <a href="https://store.nba.com/help" target="" rel="">
              NBA Store Support Home
            </a>
          </li>
          <li>
         <a href="https://twitter.com/NBASTORESupport" target="" rel="">Twitter@NBASTORESupport</a>
          </li>
          <li>
            <a href="https://store.nba.com/help/chat/return" target="" rel="">
              Returns and Exchanges
            </a>
          </li>
          <li>
            <a href="https://store.nba.com/" target="" rel="">
              NBA Store NYC
            </a>
          </li>
        </ul>
      </div>
      
    </div>
    
  );
  
}


export default Contact;
