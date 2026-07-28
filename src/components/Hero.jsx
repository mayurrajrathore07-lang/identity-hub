import React from 'react';
import './Hero.css';
import productivity from '../assets/productivity.png';
import image from '../assets/image.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <img src={image} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.8, mixBlendMode: 'screen' }} />
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
        <div className='forimg' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', paddingTop: "3%" }}>
          <img src={productivity} alt="productivity" style={{ width: '65%', height: '65%', objectFit: 'cover', }} />

        </div>
      </div>
    </section>
  );
};

export default Hero;
