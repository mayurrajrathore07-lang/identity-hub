import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    { title: 'Starter', price: '$49', period: '/month', features: ['Up to 1,000 verifications', 'Standard API access', 'Community support'] },
    { title: 'Pro', price: '$199', period: '/month', popular: true, features: ['Up to 10,000 verifications', 'Priority API access', '24/7 dedicated support', 'Custom webhooks'] },
    { title: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited verifications', 'Dedicated account manager', 'Custom SLA & On-premise', 'SOC2 Compliance'] },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <h2 className="section-title">Flexible Pricing</h2>
        <p className="section-desc">Transparent plans designed to scale with your business growth.</p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="badge">Most Popular</span>}
              <h3>{plan.title}</h3>
              <div className="price-tag">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>✓ {feat}</li>
                ))}
              </ul>
              <button className={`pricing-btn ${plan.popular ? 'btn-highlight' : ''}`}>Choose {plan.title}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
