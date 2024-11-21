import React from 'react';
import './Hero.css';
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import image5 from '../../assets/image5.svg';
import image6 from '../../assets/image6.svg';
import image7 from '../../assets/image7.svg';
import Button from '../Button/Button';
import CircleImage from '../CircleImage/CircleImage';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="images-container">
        <CircleImage src={image1} alt="tooth" className="image image1" />
        <CircleImage src={image2} alt="microscope" className="image image2" />
        <CircleImage src={image3} alt="medication" className="image image3" />
        <CircleImage src={image4} alt="cardiology" className="image image4" />
        <CircleImage src={image5} alt="red cross" className="image image5" />
        <CircleImage src={image6} alt="apple" className="image image6" />
        <CircleImage src={image7} alt="massage" className="image image7" />
      </div>
      <div className="text-container">
        <h1>
          <span className="empowering">Empowering</span><br />
          <span className="health">Healthcare Professionals</span>
        </h1>
        <p>
          We offer a set of services and features<br />
          exclusively designed for medical health professionals<br />
          to drive their business to success.
        </p>
        <Button text="Book a Demo" />
      </div>
    </section>
  );
};

export default Hero;

