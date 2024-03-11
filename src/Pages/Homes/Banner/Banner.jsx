import React from 'react';
import banner from '../../../assets/images/mobile-care-banner-pc.webp';

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
  };

  return (
    <div style={backgroundImageStyle}>
      <h5 className='text-xl font-bold mb-2'>Mobile</h5>
      <h2 className='lg:text-5xl text-4xl font-bold'>Samsung Care</h2>
    </div>
  );
};

export default Banner;
