import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">FOREX</a>
        <div className="nav-links">
          <a href="/#about">Features</a>
          <a href="/#contact">Contact</a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;


