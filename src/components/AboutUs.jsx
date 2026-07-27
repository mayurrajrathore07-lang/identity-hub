import React from 'react';
import './AboutUs.css';
import Radar from './Radar';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className='redar-container'>
        <Radar
          speed={1}
          scale={0.5}
          ringCount={10}
          spokeCount={10}
          ringThickness={0.05}
          spokeThickness={0.01}
          sweepSpeed={1}
          sweepWidth={2}
          sweepLobes={1}
          color="#9f29ff"
          backgroundColor="#9f29ff"
          falloff={2}
          brightness={1}
          enableMouseInteraction
          mouseInfluence={0.1}
        />
      </div>

      <div className="section-container">
        <h2 className="section-title">Be Part of the Future of Identity IdentityHub</h2>

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
