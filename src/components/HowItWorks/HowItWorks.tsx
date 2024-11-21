import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import step1 from '../../assets/step1.svg';
import step2 from '../../assets/step2.svg';
import step3 from '../../assets/step3.svg';
import arrow from '../../assets/arrow.svg';
import blueSvg from '../../assets/blue.svg';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  return (
    <Box className="how-it-works">
      <Container maxWidth="md" disableGutters>
        <Typography variant="h4" component="h2" className="how-it-works-title">
          <span className="how">How SolvIT Works</span>
        </Typography>
        <Typography variant="body1" component="p" className="how-it-works-description">
          <span className="stp">Step-by-step process on how to get started</span>
        </Typography>
        <Grid container className="steps">
          <Grid item xs={12} md={3} className="step">
            <img src={step1} alt="Book a Demo" />
            <Typography variant="h5" component="h3">
               <span className="how">Book a Demo</span>
            </Typography>
            <Typography variant="body1" component="p">
               <span className="stp">Easy process, simply fill the<br /> form, book your demo and you<br /> will be good to go.</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={1} className="arrow-container">
            <img src={arrow} alt="Arrow" className="arrow" />
          </Grid>
          <Grid item xs={12} md={3} className="step">
            <img src={step2} alt="Customize" />
            <Typography variant="h5" component="h3">
              <span className="how">Customize</span>
            </Typography>
            <Typography variant="body1" component="p">
             <span className="stp">Tailor the platform to your<br /> practice's needs, select your<br /> specialty and add your team.</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={1} className="arrow-container">
            <img src={arrow} alt="Arrow" className="arrow" />
          </Grid>
          <Grid item xs={12} md={3} className="step">
            <img src={step3} alt="Operate" />
            <Typography variant="h5" component="h3">
              <span className="how">Operate</span>
            </Typography>
            <Typography variant="body1" component="p">
              <span className="stp">Efficiently manage your<br /> practice and your patients'<br /> data using SolvIT.</span>
            </Typography>
          </Grid>
        </Grid>
        <img src={blueSvg} alt="Blue SVG" className="blue-svg" />
      </Container>
    </Box>
  );
};

export default HowItWorks;


