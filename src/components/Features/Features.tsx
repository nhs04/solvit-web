 import React from 'react';
import './Features.css';
import featureIcon1 from '../../assets/feature-icon1.svg';
import featureIcon2 from '../../assets/feature-icon2.svg';
import featureIcon3 from '../../assets/feature-icon3.svg';
import featureIcon4 from '../../assets/feature-icon4.svg';
import featureIcon5 from '../../assets/feature-icon5.svg';
import greenLogo from '../../assets/green-logo.svg'; 
import LinkButton from '../LinkButton/LinkButton';

const featuresData = [
  {
    title: "AIVA - for streamlined patient communication with AI Assistance",
    description: "Our AI-powered system revolutionizes patient communication by automating tailored health reminders and notifications, enabling healthcare specialists to focus on superior care.",
    icon: featureIcon1,
  },
  {
    title: "Effortless Patient Engagement via WhatsApp Integration",
    description: "Our system integrates with WhatsApp for efficient patient communication and secure, accessible file archiving.",
    icon: featureIcon2,
  },
  {
    title: "Integration with a Library of Patient Education and Instructions Material",
    description: "Our system integrates patient education materials and real-time insights to enhance communication and treatment planning, improving healthcare quality.",
    icon: featureIcon3,
  },
  {
    title: "Multilingual Healthcare Support for Arab Specialists",
    description: "Our system supports Arabic, English, and French, minimizing language barriers and ensuring seamless communication.",
    icon: featureIcon4,
  },
  {
    title: "Transform Patient Care with Advanced AI and MedLM Integration",
    description: "Advanced AI enhances patient communication and service delivery. Introducing MedLM, Google's groundbreaking medical language model, now integrated into our offerings. MedLM empowers you to streamline workflows, answer complex questions, and unlock deeper insights from medical data, ensuring a seamless and efficient healthcare experience.",
    icon: featureIcon5,
  },
];

const Features: React.FC = () => {
  return (
    <section className="features-sectionn">
      <div className="green-logo-container">
        <img src={greenLogo} alt="Green Logo" className="green-logo" />
      </div>
      <h2 className="features-headingg">Our Features</h2>
      <LinkButton text="Read More" href="#" className="features-read-moree" />
      <div className="features-containerr">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-cardd">
            <img src={feature.icon} alt={feature.title} className="feature-iconn" />
            <div className="feature-contentt">
              <h3 className="feature-titlee">{feature.title}</h3>
              <p className="feature-descriptionn">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;