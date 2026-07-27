import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-badge">Next-Gen Identity Platform</div>
        <h1 className="hero-title">
          <span className="highlight">Identity-hub is a better way to achieve privacy</span>
        </h1>
        <p className="hero-subtitle">
          Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
        </p>
      </div>
    </section>
  );
};

export default Hero;
