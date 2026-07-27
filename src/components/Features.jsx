import React from 'react';
import { FiCheck, FiShield } from 'react-icons/fi';
import './Features.css';

const Features = () => {
  const featurePoints = [
    'Comprehensive identification of personal information across public databases and data brokers.',
    'Automated removal requests and direct outreach to platform administrators to scrub sensitive data.',
    'Ongoing 24/7 digital monitoring and proactive alerts to keep your identity secure over time.',
    'Specialized tools and expert support to eliminate leaked credentials and alias exposure.'
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-layout">
        {/* Left Side: Content List */}
        <div className="features-content">
          <div className="vertical-line" />
          <div className="features-header">
            <div className="icon-wrapper">
              <div className="icon-circle primary">
                <FiShield size={20} />
              </div>
            </div>
            <h2 className="features-title">Why Choose IdentityHub</h2>
          </div>
          <div className="features-list">
            {featurePoints.map((point, index) => (
              <div key={index} className="feature-list-item">
                <div className="icon-wrapper">
                  <div className="icon-circle check">
                    <FiCheck size={14} />
                  </div>
                </div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Card Stack */}
        <div className="features-visual">
          <div className="visual-composition">
            <div className="comp-card layer-3" />
            <div className="comp-card layer-2" />
            <div className="comp-card layer-1">
              <div className="pill-line header-pill" />
              <div className="card-content-row">
                <div className="app-icon-box">
                  <div className="app-icon-inner" />
                </div>
                <div className="card-lines">
                  <div className="pill-line white" />
                  <div className="pill-line grey" />
                  <div className="pill-line grey" />
                </div>
              </div>
            </div>

            <div className="floating-element delete-btn-container">
              <div className="delete-btn">Scrub Personal Data</div>
            </div>

            <div className="floating-element ai-lock-box">
              <div className="ai-lock-icon">
                <div className="lock-shackle" />
                <div className="lock-body">AI SAFE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

