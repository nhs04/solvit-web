import React from 'react';
import './Kickstart.css';
import docImage from '../../assets/doc.svg';
import Button from '../Button/Button';

const Kickstart: React.FC = () => {
  return (
    <div className="kickstart-section">
      <img src={docImage} alt="Doctor" className="doc-image" />
      <div className="text-container2">
        <h1 className="white-text">Kickstart Your Career<br />with SolvIT</h1>
        <h1 className="navy-text">Free Access for<br />New Graduates</h1>
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default Kickstart;

