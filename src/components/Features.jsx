import React from 'react';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      title: 'Secure All Data', desc: 'The first step involves identifying all places where your personal information might be present <br> Once youve identified where your information is held, the next step is to contact the administrators of this platform <br>Removing personal information is not a one-time task but requires ongoing vigilance. <br> There are professional services and tools available that specialise in personal information removal.There are professional services and tools available that specialise in personal information removal.There are professional services and tools available that specialise in personal information removal.There are professional services and tools available that specialise in personal information removal.There are professional services and tools available that specialise in personal information removal.There are professional services and tools available that specialise in personal information removal.'
    },

  ];

  return (
    <section id="features" className="features-section">
      <div className="section-container">
        <h2 className="section-title">why choose us</h2>
        <p className="section-desc">We are the only service that provides all 3 services as a packaged service.</p>
        <div className="features-grid">
          {featureList.map((item, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">✦</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
