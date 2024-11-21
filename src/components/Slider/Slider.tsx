import React, { useState } from 'react';
import './Slider.css';
import googleCloud from '../../assets/google-cloud.svg';
import bulleImage from '../../assets/bulle.svg';

const Slider: React.FC = () => {
  const [activeTab, setActiveTab] = useState('partners');

  const partnersImages = [
    googleCloud,
    '', '', '', '', 
  ];

  const ngoImages = [
    '', '', '', '', '', 
  ];

  return (
    <div className="slider-section">
      <img src={bulleImage} alt="Bulle Background" className="bulle-background" />
      <div className="slider-tabs-container">
        <div className="slider-tabs">
          <div
            className={`slider-tab ${activeTab === 'partners' ? 'active' : ''}`}
            onClick={() => setActiveTab('partners')}
          >
            Our Partners
          </div>
          <div
            className={`slider-tab ${activeTab === 'ngo' ? 'active' : ''}`}
            onClick={() => setActiveTab('ngo')}
          >
            NGO
          </div>
        </div>
      </div>
      <div className="slider-content">
        {activeTab === 'partners' && partnersImages.map((image, index) => (
          <div key={index} className="slider-box">
            {image && <img src={image} alt={`Partner ${index + 1}`} />}
          </div>
        ))}
        {activeTab === 'ngo' && ngoImages.map((image, index) => (
          <div key={index} className="slider-box">
            {image && <img src={image} alt={`NGO ${index + 1}`} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
