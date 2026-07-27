import React from 'react';
import './AboutUs.css';
import Radar from './Radar';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">be part of the future of identity IdentityHub</h2>

        <p className="section-desc">Our mission is to safeguard digital interactions across the  <br /> with state-of-the-art cryptographic standards
          and AI-driven intelligence</p>

        <div className="button-container">
          <button>Start Free Trial</button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
