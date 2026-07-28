import React from 'react';
import Carousel from './Carousel';
import { FiUserCheck, } from 'react-icons/fi';
import './Partners.css';

const Partners = () => {
  const serviceItems = [
    {
      id: 1,
      title: 'virat kohli',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details..',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 2,
      title: 'rohit sharma',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details..',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 3,
      title: 'yashasvi ',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details..',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 4,
      title: 'vaibhav ',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details..',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    },
    {
      id: 5,
      title: 'gill ',
      description: 'Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details..',
      button: 'Explore Service',
      icon: <FiUserCheck className="carousel-icon" />
    }
  ];


  return (
    <section id="partners" className="partners-section">
      <div className="section-container">
        <h2 className="section-title">What’s our user says about us</h2>
        <div className="carousel-wrapper" style={{ width: "100%", minHeight: '380px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
          <Carousel
            items={serviceItems}
            baseWidth={1000}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            round={false}
            backgroundColor='transparent'
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;

