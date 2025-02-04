import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import './Contacto.css';
import { useTranslation } from 'react-i18next';

function Contacto() {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { t } = useTranslation();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://www.travelertours.com.mx/icontacto.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error submitting form: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log('Form submission successful:', responseData);
      setSuccessMessage( t('SendOK') );
      reset(); // Limpiar los campos del formulario
      setOpenSnackbar(true); // Mostrar Snackbar de éxito
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage( t('SendFail') );
      setOpenSnackbar(true); // Mostrar Snackbar de error
    }
  };

  return (
    <div className="contacto-page">
      <div className="contacto-overlay"></div>
      <section className="contacto" id="contacto">
        <Typography variant="h4" align="center">
          {t('Contactanos')}
        </Typography>
        <div className="contacto-container">
          <form 
            onSubmit={handleSubmit(onSubmit)} // Asegúrate de que onSubmit esté vinculado aquí
            style={{ 
              width: '100%', 
              maxWidth: 800, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              padding: '2rem' 
            }} 
          > 
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label={t('Name')}
              name="nombre"
              autoComplete="name"
              {...register("nombre", { required: true })}
              style={{ marginBottom: '1rem' }} // Espacio entre campos
            />
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('Email')}
              name="email"
              autoComplete="email"
              {...register("email", { required: true })}
              style={{ marginBottom: '1rem' }} // Espacio entre campos
            />
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="telefono"
              label={t('Phone')}
              name="telefono"
              autoComplete="tel"
              {...register("telefono", { required: true })}
              style={{ marginBottom: '1rem' }} // Espacio entre campos
            />
            <TextField
              variant="filled"
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="mensaje"
              label={t('Mensaje')}
              name="mensaje"
              multiline
              {...register("mensaje", { required: true })}
              style={{ marginBottom: '1rem' }} // Espacio entre campos
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '1rem' }}
            >
              {t('Send')}
            </Button>
          </form>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.6423181486257!2d-99.05894152416113!3d19.599818735318234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1a064bf230d%3A0x37bd218ad0cbfb0f!2sP.%20Farolito%2035%2C%20Tierra%20Blanca%2C%2055020%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1736825603547!5m2!1ses-419!2smx"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Auto-close after 6 seconds
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={successMessage ? 'success' : 'error'}>
          {successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contacto;