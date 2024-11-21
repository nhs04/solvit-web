import React from 'react';
import './Ready.css';
import readyImage from '../../assets/ready.svg';
import Button from '../Button/Button';

const Ready: React.FC = () => {
  return (
    <div className="ready-section">
      <img src={readyImage} alt="Ready" className="ready-image" />
      <div className="text-container3">
        <h1 className="white-text">Ready to reach your new potential?</h1>
        <Button text="Book Now" />
      </div>
    </div>
  );
};

export default Ready;
