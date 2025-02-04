import './Footer.css'; // Importa el archivo CSS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '../sub-components/Tiktok-Icon';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookMessengerIcon from '../sub-components/Messenger-Icon';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>{t('Comunicate')}</h2>
          <p>{t('Preguntas')}</p>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=100063523462763" target="_blank"><FacebookIcon/></a></li>
            <li><a href="https://www.instagram.com/travelertours_oficial/" target="_blank"><InstagramIcon/></a></li>
            <li><a href="https://www.tiktok.com/@travelertours1" target="_blank"><TikTokIcon/></a></li>
            <li><a href="https://wa.me/+525534226994?text=Hola,%20quiero%20informes" target="_blank"><WhatsAppIcon/></a></li>
            <li><a href="https://m.me/rn/Traverlertours1?text=Hola,%20quisiera%20informes" target="_blank"><FacebookMessengerIcon/></a></li>
            <li><a href='tel:+525534226994' target="_blank"><PhoneIcon/></a></li>
            <li><a href='mailto:contacto@travelertours.com.mx' target="_blank"><EmailIcon/></a></li>
          </ul>
        </Grid>
      <Grid item xs={12}>
        <div style={{
          height: '5px', // Altura de la línea
          background: 'linear-gradient(to right, #fc993c, #0200fc, #91bf43, #fc0203, #000000)', // Degradado lineal
          width: '100%' // Ancho completo
        }} />
      </Grid>
      {/* Tercera fila: cuatro elementos distribuidos equitativamente 
      <Grid item xs={6} sm={3}>
        <h2>{t('Company')}</h2>
        <ul className='footer-links'>
          <li><u><Link to="/about">{t('About')}</Link></u></li>
          <li><u><Link to="/magazine">{t('Magazine')}</Link></u></li>
          <li><u><Link to="/contacto">{t('Contact')}</Link></u></li>
          <li><u><Link to="/blog">Blog</Link></u></li>
        </ul>
      </Grid>
      <Grid item xs={6} sm={3}>
        <h2>Políticas</h2>
      </Grid>
      <Grid item xs={6} sm={3}>
        <h2>Recursos</h2>
      </Grid>
      <Grid item xs={6} sm={3}>
        <h2>Ayuda</h2>
        <ul>
          <li><a></a></li>
        </ul>
      </Grid>*/}

      {/* Cuarto elemento: un elemento que ocupa todo el ancho */}
      <Grid item xs={12}>
        <p>{t('Derechos')}</p>
        <p><a href='https://www.linkedin.com/in/jose-alberto-mendoza/'>{t('Diseñado')}</a></p>
      </Grid>
    </Grid>
    </footer>
  );
}

export default Footer;