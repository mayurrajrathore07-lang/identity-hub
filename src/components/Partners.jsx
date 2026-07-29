import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { FiUserCheck } from 'react-icons/fi';
import './Partners.css';

const Partners = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serviceItems = [
    {
      id: 1,
      title: 'Virat Kohli',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 2,
      title: 'Rohit Sharma',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 3,
      title: 'Yashasvi Jaiswal',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 4,
      title: 'Vaibhav suryawanshi',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 5,
      title: 'Shubman Gill',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    }
  ];

  const calculatedWidth = Math.min(1000, Math.max(280, windowWidth - 48));

  return (
    <section id="partners" className="partners-section">
      <div className="section-container">
        <h2 className="partners-title">What Our Users Say About Us</h2>
        <div className="carousel-box">
          <Carousel
            items={serviceItems}
            baseWidth={calculatedWidth}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            round={false}
            backgroundColor="transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;



