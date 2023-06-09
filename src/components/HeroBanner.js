import React from 'react';
import { Box, Stack, Typography, Button  } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx = {{
      mt: { lg: '212px', xs: '70px', },
      ml: { sm: '50px'}
      }} position='relative' p='20px'
    >
      <Typography color='#d32f2f' fontWeight='600' fontSize='26px' ml='40px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
       sx ={{ fontSize: { lg: '54px', xs: '40px' }
      }}
      mb='23px' mt='30px' ml='40px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4} ml='40px'>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' href='#exerciseSearch' className='smooth-scroll' style={{ marginLeft: '40px' }}>Explore Exercises</Button>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
      <Typography fontWeight={600}
        color='#ff2625'
        sx ={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize='200px'
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
