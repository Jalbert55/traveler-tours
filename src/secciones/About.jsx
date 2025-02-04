import './About.css';
import FlightIcon from '@mui/icons-material/Flight';
import LuggageIcon from '@mui/icons-material/Luggage';
import HotelIcon from '@mui/icons-material/Hotel';
import HikingIcon from '@mui/icons-material/Hiking';
import fotoGrupal from '../assets/SAM8190.webp';
import fotoPlaya from '../assets/p6.jpg';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <section className="about" id="about">
        <div className="text-overlay"></div>
          <div className="about-container">
            <section className="section-group-image">
              <ul>
              <li><h1 className="titulos">Traveler Tours</h1>
              <h3 className='textos'>{t('About1')}</h3></li>
              <li><img src={fotoGrupal} alt="Imagen ilustrativa" width={1050} height={850} /></li>
              </ul>
            </section>
            <section className="section-beach-image">
              <ul>
              <li><img src={fotoPlaya} alt="Imagen ilustrativa" width={1000} height={600} /></li>
              <li><h2 className="titulos">{t('About2')}</h2>
              <h3 className='textos'>{t('About3')}</h3></li>
              </ul>
            </section>
            <section className="section-services">
            <h3 className="titulos">{t('About4')}</h3>
            <ul>
                <li>
                  <div className="service-item">
                    <LuggageIcon />
                    <h3 className="titulos">{t('About5')}</h3>
                    <p>{t('About6')}</p>
                  </div>
                </li>
                <li>
                  <div className="service-item">
                    <FlightIcon />
                    <h3 className="titulos">{t('About7')}</h3>
                    <p>{t('About8')}</p>
                  </div>
                </li>
                <li>
                  <div className="service-item">
                    <HotelIcon/>
                    <h3 className="titulos">{t('About9')}</h3> 
                    <p>{t('About10')}</p>
                  </div>
                </li>
                <li>
                  <div className="service-item">
                    <HikingIcon/>
                    <h3 className="titulos">{t('About11')}</h3> 
                    <p>{t('About12')}</p>
                  </div>
                </li>
            </ul>
            </section>
            <div className='title'>
              <h1>{t('About13')}</h1>
            </div>
            <br/>
          </div>
      </section>
    </div>
  );
}

export default About;