import React from 'react';
import './Partners.css';

const Partners = () => {
  const partnerNames = ['ApexCorp', 'FinShield', 'NovaBank', 'CyberVault', 'QuantumPay'];

  return (
    <section id="partners" className="partners-section">
      <div className="section-container">
        <h2 className="section-title">Trusted Partners</h2>
        <p className="section-desc">Empowering security leaders and global enterprises worldwide.</p>
        <div className="partners-logos">
          {partnerNames.map((name, index) => (
            <div key={index} className="partner-item">
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
