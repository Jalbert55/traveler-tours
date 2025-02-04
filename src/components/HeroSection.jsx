import './HeroSection.css';
import { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Promociones from '../components/Promociones';
import Beneficios from '../components/Beneficios';
import Carrousell from '../components/Carrousell';
import Testimonios from '../components/Testimonios';

function HeroSection() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scroll.scrollTo(section.offsetTop, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50 && !hasScrolled) {
      setHasScrolled(true);
      scrollToSection('promociones');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  useEffect(() => {
    setShowModal(true);
    setTimeout(() => {
    const modalElement = document.querySelector('#Boletin.modal');
    modalElement.classList.add('show');
    }, 5000);
  }, []);

  const handleCloseModal = () => {
    const modalElement = document.querySelector('.modal');
    modalElement.classList.remove('show');
  };

  return (
    <>
      {showModal && (
        <div id="Boletin" className="modal">
          <div className="modal-boletin">
          <button 
              className="close-button" 
              onClick={handleCloseModal} 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '40px',
                cursor: 'pointer',
                color: '#333'
              }}
            >
              &times; {/* Este es el símbolo de cierre */}
            </button>
            <iframe width="100%" height="100%" scrolling="no" src="https://6143bf68.sibforms.com/serve/MUIFAPd--SnbpFndjgEWV1xCRjZvpYRqdaT_dIQOb_bRCsfN2BfBDKsBOq_3Tj_W4uVx7OZPM7v8OSp8mczHoOLq6bPTLTayfXEd6aOKx_J102wxaLjOJQM6Ui3sRZGqHvvZNP7s0RjtglWSKFXo-RF4tNur46WJnJDxzCRUBVkNanIWYUgNegegWqNpGne9exNN7ropBxvC4VMw"></iframe>
          </div>
        </div>
      )}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-text-container">
            <h1 className="hero-title dm-serif-text-regular-italic">
              {t('HeroTitle')}
            </h1>
            <h2 className="hero-subtitle dm-serif-text-regular-italic">
              {t('HeroSubtitle')}
            </h2>
            <div className="hero-button">
              <button
                className="dm-button dm-button-primary"
                onClick={() => scrollToSection('promociones')}
              >
                <KeyboardArrowDownIcon sx={{ fontSize: 90, color: 'black' }} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Promociones />
      <Beneficios />
      <Carrousell />
      <Testimonios />
    </>
  );
}

export default HeroSection;