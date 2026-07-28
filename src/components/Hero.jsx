import React from 'react';
import './Hero.css';
import productivity from '../assets/productivity.png';
import imageee from '../assets/imageee.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <img src={imageee} alt="background glow" className="hero-bg-glow" />
      </div>
      <div className="hero-container">
        <div className="hero-badge">Next-Gen Identity Platform</div>
        <h1 className="hero-title">
          <span className="highlight">Identity-hub is a better way to <span className='down' style={{ color: 'blue' }}> achieve privacy</span></span>
        </h1>
        <p className="hero-subtitle">
          Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
        </p>
        <div className="hero-cta">
          <button className="hero-btn-primary">start free trail</button>
          <button className="hero-btn-secondary">use it now</button>
        </div>
        <div className="hero-image-container">
          <img src={productivity} alt="productivity" className="hero-productivity-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
