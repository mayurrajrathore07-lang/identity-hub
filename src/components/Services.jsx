import React from 'react';
import Carousel from './Carousel';
import { FiShield, FiUserCheck, FiCpu, FiEye, FiLock } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: 'Personal Data Scrubbing',
      description: 'Scans data brokers and public databases to identify and permanently remove exposed personal records.',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 2,
      title: 'Cloaking Alias Profiles',
      description: 'Generates secure virtual emails, proxy phone numbers, and disposable cards to protect real identity data.',
      button: 'Explore Service',
      icon: <FiShield className="carousel-icon" />
    },
    {
      id: 3,
      title: 'Virtual Identity Security',
      description: 'Deploys zero-trust cryptographic authentication across all digital touchpoints to prevent account takeover.',
      button: 'Explore Service',
      icon: <FiCpu className="carousel-icon" />
    },
    {
      id: 4,
      title: 'Dark Web Intelligence',
      description: 'Provides 24/7 proactive surveillance for compromised credentials, leaked hashes, and stolen identity data.',
      button: 'Explore Service',
      icon: <FiEye className="carousel-icon" />
    },
    {
      id: 5,
      title: 'AI Threat Defense',
      description: 'Real-time neural defense algorithms guarding against synthetic identity fraud and deepfake exploits.',
      button: 'Explore Service',
      icon: <FiLock className="carousel-icon" />
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <h2 className="section-title">Our Suite of Protection Services</h2>
        <p className="section-desc">Comprehensive privacy, cloaking, and zero-trust security tools tailored for modern enterprises and individuals.</p>

        <div className="carousel-wrapper" style={{ minHeight: '380px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Carousel
            items={serviceItems}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            round={false}
          />

          <Carousel
            items={serviceItems}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
          <Carousel
            items={serviceItems}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>

      </div>
    </section>
  );
};

export default Services;

