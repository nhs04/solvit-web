import React from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';
import C1 from '../../components/Comp1/Comp1';
import C2 from '../../components/Comp2/Comp2';
import C3 from '../../components/Comp3/Comp3';
import C4 from '../../components/Comp4/Comp4';
import ReadySection from '../../components/Ready/Ready';
import Footer from '../../components/Footer/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="aboutUs">
      <Navbar />
      <C1 />
      <C2 />
      <C3 />
      <C4 />
      <ReadySection/>
      <Footer/>
    </div>
  );
};

export default AboutUs;

