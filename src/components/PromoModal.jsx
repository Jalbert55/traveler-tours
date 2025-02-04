import { Modal, Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types'; // Importa PropTypes

const PromoModal = ({ open, onClose, promo }) => {
  const handleWhatsApp = () => {
    const message = `Hola, me gustaría obtener más información sobre la promoción: ${promo.titulo}`;
    const phoneNumber = '1234567890'; // Cambia esto por el número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, maxWidth: 400, margin: 'auto', marginTop: '20vh' }}>
        <Typography variant="h6" component="h2">
          {promo.titulo}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Duración: {promo.duracion} días
        </Typography>
        <Typography>
          Fechas: {promo.fechas}
        </Typography>
        <Typography>
          Desde: {promo.precio}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleWhatsApp} sx={{ mt: 2 }}>
          Pedir informes por WhatsApp
        </Button>
      </Box>
    </Modal>
  );
};

// Definir las propiedades esperadas
PromoModal.propTypes = {
  open: PropTypes.bool.isRequired, // Propiedad 'open' debe ser un booleano y es requerida
  onClose: PropTypes.func.isRequired, // Propiedad 'onClose' debe ser una función y es requerida
  promo: PropTypes.shape({ // Propiedad 'promo' debe ser un objeto con las siguientes propiedades
    titulo: PropTypes.string.isRequired,
    duracion: PropTypes.string.isRequired,
    fechas: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    imgPortada: PropTypes.string // Esta propiedad es opcional
  }).isRequired
};

export default PromoModal;