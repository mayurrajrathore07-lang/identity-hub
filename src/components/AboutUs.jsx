import React from 'react';
import './AboutUs.css';
import Radar from './Radar';
import { FaTwitter, FaInstagram, FaTelegram, FaFacebookF } from 'react-icons/fa6';

const AboutUs = () => {
  return (
    <div id="about" className="about-page-wrapper" style={{ paddingTop: '120px' }}>
      <section className="cta-section">
        <div className="redar-container">
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
            backgroundColor="#000000"
            falloff={2}
            brightness={1}
            enableMouseInteraction
            mouseInfluence={0.1}
          />
        </div>

        <div className="cta-content">
          <h2 className="cta-title">
            Be part of the future of <br />
            <span className="cta-title-highlight">
              IdentityHub
            </span>
          </h2>

          <p className="cta-description">
            Unleash the power of AI within Brainwave. Upgrade your
            productivity with Brainwave, the open AI chat app.
          </p>

          <div className="cta-button-wrapper">
            <button className="cta-btn">Start free trial</button>
          </div>
        </div>
      </section>


      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-logo">
              <div className="logo-icon-squares">
                <span className="sq sq-1"></span>
                <span className="sq sq-2"></span>
              </div>
              <span className="footer-logo-text">IdentityHub</span>
            </div>

            <nav className="footer-nav">
              <a href="#features">FEATURES</a>
              <a href="#services">SERVICES</a>
              <a href="#pricing">PRICING</a>
              <a href="#how-to-use">HOW TO USE</a>
            </nav>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              © Identityhub 2026. All rights reserved
            </p>

            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

