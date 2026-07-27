import React from 'react';
import {
  FiChevronsDown,
  FiCheck,
  FiUser,
  FiPhone,
  FiMail,
  FiCreditCard,
  FiKey,
  FiLock,
  FiMousePointer
} from 'react-icons/fi';
import './Features.css';

const featureCardsData = [
  {
    id: 'protect',
    theme: 'blue',
    title: 'Protect Personal information',
    icon: <FiChevronsDown size={18} />,
    points: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal."
    ]
  },
  {
    id: 'reporting',
    theme: 'purple',
    title: 'Detailed Reporting',
    icon: <FiChevronsDown size={18} />,
    points: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal."
    ]
  },
  {
    id: 'secure',
    theme: 'green',
    title: 'Secure All Data',
    icon: <FiCheck size={18} />,
    points: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal."
    ]
  }
];

const reportingItems = [
  { id: 1, label: 'Username', value: '+1 (456) 453-3456', icon: <FiUser />, color: 'blue' },
  { id: 2, label: 'Phone numbers', value: '+1 (456) 453-3456', icon: <FiPhone />, color: 'purple' },
  { id: 3, label: 'Email address', value: '+1 (456) 453-3456', icon: <FiMail />, color: 'orange' },
  { id: 4, label: 'Credit card', value: '+1 (456) 453-3456', icon: <FiCreditCard />, color: 'green' },
  { id: 5, label: 'Password', value: 'Kas3345-r32', icon: <FiKey />, color: 'cyan' },
  { id: 6, label: 'One-time passcode', value: 'Kas3345-r32', icon: <FiLock />, color: 'emerald' },
];

const Features = () => {
  const featurePoints = [
    'Comprehensive identification of personal information across public databases and data brokers.',
    'Automated removal requests and direct outreach to platform administrators to scrub sensitive data.',
    'Ongoing 24/7 digital monitoring and proactive alerts to keep your identity secure over time.',
    'Specialized tools and expert support to eliminate leaked credentials and alias exposure.'
  ];

  const detailed = [
    'The first step involves identifying all places where your personal information might be present.',
    'The first step involves identifying all places where your personal information might be present.',
    'The first step involves identifying all places where your personal information might be present.',
    'The first step involves identifying all places where your personal information might be present.',
  ];

  const alldata = [
    'The first step involves identifying all places where your personal information might be present.',
    'The first step involves identifying all places where your personal information might be present.',
    'The first step involves identifying all places where your personal information might be present.',
    'The first step involves identifying all places where your personal information might be present.',
  ]

  return (
    <section id="features" className="features-section">
      <div className="features-container">

        {/* Header Section */}
        <div className="features-header">
          <span className="features-badge">Features</span>
          <h2 className="features-title">
            Why <span className="highlight">choose</span> us
          </h2>
          <p className="features-subtitle">
            We are the only service that provides all 3 services as a packaged service
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="features-cards-container">

          {/* Card 1: Protect Personal Information */}
          <div className="feature-card theme-blue">
            <div className="feature-card-left">
              <div className="feature-card-header">
                <div className="feature-header-icon">
                  {featureCardsData[0].icon}
                </div>
                <h3 className="feature-card-title">{featureCardsData[0].title}</h3>
              </div>

              <div className="feature-points-container">
                <div className="feature-vertical-line" />
                <div className="feature-points-list">
                  {featureCardsData[0].points.map((point, index) => (
                    <div key={index} className="feature-point-item">
                      <div className="feature-point-icon">
                        <FiCheck size={12} />
                      </div>
                      <p className="feature-point-text">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-card-right">
              <div className="visual-stack-container">
                <div className="stack-card layer-back" />
                <div className="stack-card layer-mid" />
                <div className="stack-card layer-front">
                  <div className="front-pill-bar" />
                  <div className="front-card-body">
                    <div className="front-icon-box">
                      <div className="inner-icon-shape" />
                    </div>
                    <div className="front-lines">
                      <div className="line-white" />
                      <div className="line-gray" />
                      <div className="line-gray" />
                    </div>
                  </div>
                </div>

                <div className="floating-badge delete-badge">
                  <span>Delete</span>
                  <FiMousePointer className="cursor-icon" size={12} />
                </div>

                <div className="floating-badge ai-lock-badge">
                  <div className="ai-lock-icon">
                    <FiLock size={16} />
                  </div>
                  <span className="ai-text">AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Detailed Reporting */}
          <div className="feature-card theme-purple">
            <div className="feature-card-left">
              <div className="feature-card-header">
                <div className="feature-header-icon">
                  {featureCardsData[1].icon}
                </div>
                <h3 className="feature-card-title">{featureCardsData[1].title}</h3>
              </div>

              <div className="feature-points-container">
                <div className="feature-vertical-line" />
                <div className="feature-points-list">
                  {featureCardsData[1].points.map((point, index) => (
                    <div key={index} className="feature-point-item">
                      <div className="feature-point-icon">
                        <FiCheck size={12} />
                      </div>
                      <p className="feature-point-text">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-card-right">
              <div className="visual-reporting-grid">
                {reportingItems.map((item) => (
                  <div key={item.id} className="reporting-card-item">
                    <div className={`reporting-icon-box ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="reporting-details">
                      <span className="reporting-label">{item.label}</span>
                      <span className="reporting-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Secure All Data */}
          <div className="feature-card theme-green">
            <div className="feature-card-left">
              <div className="feature-card-header">
                <div className="feature-header-icon">
                  {featureCardsData[2].icon}
                </div>
                <h3 className="feature-card-title">{featureCardsData[2].title}</h3>
              </div>

              <div className="feature-points-container">
                <div className="feature-vertical-line" />
                <div className="feature-points-list">
                  {featureCardsData[2].points.map((point, index) => (
                    <div key={index} className="feature-point-item">
                      <div className="feature-point-icon">
                        <FiCheck size={12} />
                      </div>
                      <p className="feature-point-text">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-card-right">
              <div className="visual-shield-container">
                <div className="shield-illustration">
                  <svg className="shield-svg" viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 0L195 38V105C195 168 148 216 100 230C52 216 5 168 5 105V38L100 0Z"
                      fill="url(#shield-blue-gradient)"
                    />
                    <defs>
                      <linearGradient id="shield-blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066FF" />
                        <stop offset="100%" stopColor="#00A2FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="shield-lock-box">
                    <FiLock size={40} className="shield-lock-icon" />
                  </div>
                </div>

                <div className="floating-info-card info-email">
                  <div className="info-icon orange">
                    <FiMail size={14} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Email address</span>
                    <span className="info-val">nija@gmail.com</span>
                  </div>
                </div>

                <div className="floating-info-card info-user">
                  <div className="info-icon blue">
                    <FiUser size={14} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">User name</span>
                    <span className="info-val">tufayel nija</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;

