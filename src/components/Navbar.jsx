import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">❖</span>
          <span className="logo-text">IdentityHub</span>
        </div>
        <nav className="navbar-links">
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#partners">Partners</a>
          <a href="#about">About Us</a>
        </nav>
        <div className="navbar-actions">
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
