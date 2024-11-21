import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import './Comp2.css';

const Comp2: React.FC = () => {
  return (
    <Container className="about-comp2-container">
      <Box className="about-about-section">
        <Typography variant="h2" component="h2"><span className="abt">About us</span></Typography>
        <Box className="about-underline-blue"></Box>
        <Typography variant="body1" className="about-about-description">
          <span className="slvt">
            SolvIT, the cutting-edge AI-powered healthcare management<br /> solution tailored for diverse providers like doctors, dentists,<br /> psychologists, and dietitians.
            </span>
        </Typography>
      </Box>
      <Box className="about-underline-green"></Box>
      <Grid container className="about-features-section">
        <Grid item xs={12} sm={6} className="about-feature">
          <Typography variant="body1">
            Our all-in-one platform features seamless<br /> scheduling, EMR, patient education, billing,<br /> telehealth, remote monitoring, and marketing<br /> tools, all within an intuitive web-based interface.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className="about-feature">
          <Typography variant="body1">
            Powered by advanced AI technologies like<br /> Google's MedLM, SolvIT enhances patient<br /> communication across multiple channels and<br /> leverages WhatsApp for even better patient-<br />practitioner interaction. Elevate your practice with SolvIT's innovative approach to healthcare<br /> management.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Comp2;

