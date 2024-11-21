import React from 'react';
import Particle from '../Particle/Particle';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

const ParticleWrapper: React.FC = () => {
  return (
    <div className="particle-wrapper">
      <Particle />
      <Navbar />
      <Hero />
    </div>
  );
};

export default ParticleWrapper;
