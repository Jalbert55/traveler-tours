import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fondo from '../assets/VideoFondo.webm';
import fondoMobile from '../assets/VideoFondoM.mp4';
import './SplashScreen.css';

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []); // Empty dependency array to run only once

  return (
    <div
      className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <video
        src={isMobile ? fondoMobile : fondo}
        autoPlay
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

// Definir las propiedades esperadas
SplashScreen.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default SplashScreen;