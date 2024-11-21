import React from 'react';
import './Comp1.css';
import femaleImage from '../../assets/female.svg';
import Button from '../Button/Button';

const Comp1: React.FC = () => {
  
  return (
    <div className="comp1-container">
      <div className="background-imagee" style={{ backgroundImage: `url(${femaleImage})` }}></div>
      <div className="text-containeer">
        <h1>
           <span className="rev">Revolutionize</span> <br />
          <span className="highlight">Your Healthcare Practice</span>
        </h1>
        <Button text="Book a Demo" />
      </div>
    </div>
  );
};

export default Comp1;
