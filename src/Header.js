import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Wonderlust Adventures: Exploring Canada!</h1>
        <img src="canadalogo.jpg" alt="Wanderlust Adventures: Exploring Canada" />
      </div>
      <nav className="header-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/ItineraryPlanner">Plan/Organise</Link></li>
          
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
