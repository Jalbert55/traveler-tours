import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './Promociones.css';
import { Button } from '@mui/material';

function Promociones() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAlbumClick = () => {
    navigate('/album'); // Absolute path to the album route
  };

  const handleBackClick = () => {
    window.history.back(); // Regresa a la página anterior en el historial del navegador
  };

  return (
    <>
      <div id="promociones" className='promociones'>
      <div className="promo-overlay"></div> 
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', zIndex: 2, position: 'relative' }}>
          <Button onClick={handleBackClick} style={{ marginRight: '10px', fontSize: '2rem' }}>
            <HomeIcon fontSize="inherit" /> {/* Mantiene el tamaño del icono */}
          </Button>
          <h1>{t('Promociones')}</h1>
        </div>
        <iframe
          src="https://www.megatravel.com.mx/tools/ofertas-viaje.php?"
          width="100%"
          height="600px" /* Adjust height as needed */
          border="0"
          align="center"
          style={{ zIndex: 2, position: 'relative' }}
        />
      </div>
      <button onClick={handleAlbumClick}>
        <div className="album">
          <h1>{t('Album')}</h1>
        </div>
      </button>
    </>
  );
}

export default Promociones;