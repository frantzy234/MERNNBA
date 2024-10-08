
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; 


function Navbar() {

    const [menuOpen,setMenuOpen] = useState(false)
    
  return (
    <nav>
     
     <Link to="/"className='title'>
     PlayerPulse
     </Link> 
     <div className="menu"
      onClick={() => {
        console.log("Menu clicked");
        setMenuOpen(!menuOpen)
     }}>
        <span></span>
        <span></span>
        <span></span>
        
     </div>
     <ul className={menuOpen ? "open" : ""}>
        <li>
        
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/player-stats">Player Statistics</NavLink>
        </li>
        </ul>
      
    </nav>
  );
}

export default Navbar;
