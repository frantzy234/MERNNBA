
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; 


function Navbar() {

    const [menuOpen,setMenuOpen] = useState(false)
    
  return (
    <nav>
     
     <Link to="/"className='title'>

   
     Above The Rim 
     <img 
           src="https://cdn2.iconfinder.com/data/icons/basketball-equipment-4/500/anm238_16_basketball_throw_goal-512.png" 
                  alt="Basketball Icon" 
                  className="logoIcon" 
                />
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
          <NavLink to="/player-stats">The Starting Five</NavLink>
        </li>
        </ul>
      
    </nav>
  );
}

export default Navbar;
