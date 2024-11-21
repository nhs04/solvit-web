import React from 'react';
import './Revolutionize.css';
import featureImage from '../../assets/feature-image.svg';
import featureImageBg from '../../assets/feature-image-bg.svg';
import LinkButton from '../LinkButton/LinkButton';

const Revolutionize: React.FC = () => {
  return (
    <section className="revolutionize">
      <h2>Revolutionize Your Healthcare Practice</h2>
      <p>
        AI-Assisted Healthcare Management Solutions for Medical Doctors, Dentists,<br />
        Psychologists, Dietitians, and More
      </p>
      <LinkButton text="More About Us" href="#more-about" className="more-about-button" />
      <div className="feature-image-container">
        <img src={featureImageBg} alt="Feature Background" className="feature-image-background" />
        <img src={featureImage} alt="Feature" className="feature-image" />
      </div>
    </section>
  );
};

export default Revolutionize;
