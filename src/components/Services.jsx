import React from 'react';
import Carousel from './Carousel';
import { FiShield, FiUserCheck, FiCpu } from 'react-icons/fi';
import './Services.css';

const Services = () => {
    const serviceItems = [
        {
            id: 1,
            title: 'Personal Information removal',
            description: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
            button: "Explore More",
            icon: <FiUserCheck className="carousel-icon" />
        },
        {
            id: 2,
            title: 'Cloaking Alias Profiles',
            description: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
            button: "Explore More",
            icon: <FiShield className="carousel-icon" />
        },
        {
            id: 3,
            title: 'Virtual identities Security',
            description: 'Lets users quickly find answers to their questions without having to search through multiple sources..',
            button: "Explore More",
            icon: <FiCpu className="carousel-icon" />
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="section-container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-desc">Verify identities quickly and securely with our suite of verification tools.</p>

                <div className='flex-container'>

                    <div className="carousel-wrapper" style={{ height: '400px', position: 'relative' }}>
                        <Carousel
                            items={serviceItems}
                            baseWidth={320}
                            autoplay={false}
                            autoplayDelay={3000}
                            pauseOnHover={false}
                            loop={false}
                            round={false}
                        />
                    </div>

                    <div className="carousel-wrapper" style={{ height: '400px', position: 'relative' }}>
                        <Carousel
                            items={serviceItems}
                            baseWidth={320}
                            autoplay={false}
                            autoplayDelay={3000}
                            pauseOnHover={false}
                            loop={false}
                            round={false}
                        />
                    </div>

                    <div className="carousel-wrapper" style={{ height: '400px', position: 'relative' }}>
                        <Carousel
                            items={serviceItems}
                            baseWidth={320}
                            autoplay={false}
                            autoplayDelay={3000}
                            pauseOnHover={false}
                            loop={false}
                            round={false}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
