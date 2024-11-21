import React from 'react';
import ParticleWrapper from '../../components/ParticleWrapper/ParticleWrapper';
import Revolutionize from '../../components/Revolutionize/Revolutionize';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import Features from '../../components/Features/Features';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import KickstartCareer from '../../components/Kickstart/Kickstart';
import Slide from '../../components/Slider/Slider';
import SwiperComponent from '../../components/SwiperComponent/SwiperComponent';
import ReadySection from '../../components/Ready/Ready';
import Footer from '../../components/Footer/Footer';


import './Homepage.css';

const Homepage: React.FC = () => {
  return (
    <div className="Homepage">
      <ParticleWrapper />
      <Revolutionize />
      <WhyChoose />
      <Features />
      <HowItWorks />
      <KickstartCareer />
      <Slide />
      <SwiperComponent />
      <ReadySection />
      <Footer />
    </div>
  );
};

export default Homepage;
