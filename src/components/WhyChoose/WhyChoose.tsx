import React from 'react';
import './WhyChoose.css';
import efficiencyIcon from '../../assets/efficiency-icon.svg';
import comprehensiveIcon from '../../assets/comprehensive-icon.svg';
import aiPoweredIcon from '../../assets/ai-powered-icon.svg';
import securityIcon from '../../assets/security-icon.svg';

const WhyChoose: React.FC = () => {
  return (
    <section className="why-choose">
      <h2>Why Choose SolvIT?</h2>
      <div className="features-container">
        <div className="feature">
          <img src={efficiencyIcon} alt="Efficiency Icon" className="feature-icon" />
          <h3>Efficiency</h3>
          <p>Streamline operations with AI-assisted scheduling, EMR, billing, and more.</p>
        </div>
        <div className="feature">
          <img src={comprehensiveIcon} alt="Comprehensive Icon" className="feature-icon" />
          <h3>Comprehensive</h3>
          <p>One-stop solution for all healthcare management needs.</p>
        </div>
        <div className="feature">
          <img src={aiPoweredIcon} alt="AI-Powered Icon" className="feature-icon" />
          <h3>AI-Powered</h3>
          <p>Enhanced patient communication using advanced AI technologies.</p>
        </div>
        <div className="feature">
          <img src={securityIcon} alt="Security Icon" className="feature-icon" />
          <h3>Security</h3>
          <p>We prioritize data security with Google Cloud & guaranteed HIPAA compliance.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;


