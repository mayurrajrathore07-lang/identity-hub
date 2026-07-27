import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-badge">Next-Gen Identity Platform</div>
        <h1 className="hero-title">
          Secure & Seamless <span className="highlight">Identity Verification</span>
        </h1>
        <p className="hero-subtitle">
          Empower your enterprise with AI-driven authentication, zero-trust security, and instant global onboarding.
        </p>
        <div className="hero-cta">
          <button className="hero-btn-primary">Explore Platform</button>
          <button className="hero-btn-secondary">Watch Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
