import "./Beneficios.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PaymentsIcon from '@mui/icons-material/Payments';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DiscountIcon from '@mui/icons-material/Discount';
import Grid from '@mui/material/Grid'; // Importa el componente Grid
import { useTranslation } from 'react-i18next';

const Beneficios = () => {
  const { t } = useTranslation(); // Obtiene la función t para traducir

  const beneficios = [
    {
      titulo: t('MSI'),
      descripcion: t('Card'),
      icono: <PaymentsIcon />
    },
    {
      titulo: t('AtenPersonalizada'),
      descripcion: t('Asesoramiento'),
      icono: <Diversity3Icon />
    },
    {
      titulo: t('BigDeals'),
      descripcion: t('Discount'),
      icono: <DiscountIcon />
    },
  ];

  return (
    <div className="beneficios">
      <Box sx={{ flexGrow: 1, paddingTop: '10px', paddingBottom: '10px' }}>
        <Grid container spacing={2} justifyContent="center">
          {beneficios.map((beneficio) => (
            <Grid item xs={12} sm={6} md={4} key={beneficio.titulo}>
              <Card className="card-beneficio">
                <CardContent>
                  {beneficio.icono}
                  <Typography gutterBottom variant="h5" component="div">
                    {beneficio.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {beneficio.descripcion}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Beneficios;