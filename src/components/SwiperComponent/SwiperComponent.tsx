import React, { useRef, useState } from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './SwiperComponent.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper as SwiperInstance } from 'swiper';
import greenBubble from '../../assets/green.svg';

const SwiperComponent: React.FC = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5; 

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const updateCurrentSlide = (swiper: SwiperInstance) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  return (
    <Box className="swiper-section">
      <img src={greenBubble} alt="Green Bubble" className="green-bubble" />
      <Typography variant="h4" component="h2" className="swiper-heading">
        <span className="ppl">People Sharing Their Love</span>
      </Typography>
      <Typography variant="body1" component="p" className="underline-container">
        <span className="underline"></span>
      </Typography>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => updateCurrentSlide(swiper)}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {[...Array(totalSlides)].map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1.5rem',
                backgroundColor: '#fff',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}
            >
              <Avatar sx={{ width: 80, height: 80, marginBottom: '1rem' }} />
              <Typography variant="h6" component="p" sx={{ color: '#1f2937', fontWeight: 'bold' }}>
                Name goes here
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum text goes here for the feedback.
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
        <IconButton onClick={handlePrev} sx={{ marginRight: '1rem' }}>
          <ArrowBackIosIcon sx={{ color: '#3FD6C5' }} />
        </IconButton>
        <Typography variant="body1" sx={{ color: '#3FD6C5' }}>
          {currentSlide} / {totalSlides}
        </Typography>
        <IconButton onClick={handleNext} sx={{ marginLeft: '1rem' }}>
          <ArrowForwardIosIcon sx={{ color: '#3FD6C5' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SwiperComponent;
