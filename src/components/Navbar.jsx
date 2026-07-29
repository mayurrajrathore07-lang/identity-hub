import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">❖</span>
          <span className="logo-text">IdentityHub</span>
        </a>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`navbar-content ${isMenuOpen ? 'is-open' : ''}`}>
          <nav className="navbar-links">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#partners" onClick={closeMenu}>Partners</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
          </nav>
          <div className="navbar-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

