import './Testimonios.css';
import StarRatings from 'react-star-ratings';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios'; // Para hacer las peticiones al servidor
import { useTranslation } from 'react-i18next';

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [texto, setTexto] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [imagen, setImagen] = useState('');
  const [user, setUser] = useState(null); // Estado para almacenar el usuario logueado
  const { t } = useTranslation(); 

  // Simulando la obtención de datos de una API
  useEffect(() => {
    axios.get('gtestimonios.php')
      .then(response => {
        if (Array.isArray(response.data)) {
          setTestimonios(response.data);
        } else {
          console.error('La respuesta no es un array:', response.data);
          setTestimonios([]);
        }
      })
      .catch(error => {
        console.error('Error al obtener los testimonios:', error);
        setTestimonios([]);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar los datos al servidor
    axios.post('itestimonios.php', {
      nombre,
      texto,
      calificacion,
      imagen,
      timestamp: new Date().toISOString()
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
      .then(response => {
        // Actualizar la lista de testimonios con el testimonio recién creado
        setTestimonios([...testimonios, response.data]);
        // Limpiar los campos del formulario
        setNombre('');
        setTexto('');
        setCalificacion(0);
        setImagen('');
      })
      .catch(error => {
        console.error('Error al enviar el testimonio:', error);
      });
  };

  // Calcular el número de testimonios a mostrar
  const slidesToShow = Math.min(testimonios.length, 3); // Muestra hasta 3 testimonios

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Mostrar 3 testimonios por defecto
    slidesToScroll: 1, // Cambiar 3 a 1 para que se desplace uno a la vez
    autoplay: true,
    autoplaySpeed: 5000, // Velocidad de autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <GoogleOAuthProvider clientId="95029252582-od0990up40ib2v61udllnakbh5b382kd.apps.googleusercontent.com">
  <div className="tcontainer">
    <div className="testimonios-container">
      <h2>{t('TestimonialTitle')}</h2>
      <form className='testimonios' onSubmit={handleSubmit}>
        <label htmlFor="nombre">{t('Name')}</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        
        <label htmlFor="texto">{t('Testimonial')}</label>
        <textarea id="texto" value={texto} onChange={(e) => setTexto(e.target.value)} required />
        
        <label htmlFor="calificacion">{t('Calificacion')}</label>
        <StarRatings
          rating={calificacion}
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="gold"
          changeRating={(newRating) => setCalificacion(newRating)}
          numberOfStars={5}
          name='rating'
        />
        
        <label>{t('SelectPicture')}</label>
        <div className="image-selection">
  <label className="image-option">
    <input
      type="radio"
      value="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
      checked={imagen === "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}
      onChange={(e) => setImagen(e.target.value)}
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
      alt="Imagen 1"
      style={{ width: '50px', marginRight: '10px' }}
    />
  </label>

  <label className="image-option">
    <input
      type="radio"
      value="https://cdn-icons-png.flaticon.com/256/3135/3135823.png"
      checked={imagen === "https://cdn-icons-png.flaticon.com/256/3135/3135823.png"}
      onChange={(e) => setImagen(e.target.value)}
    />
    <img
      src="https://cdn-icons-png.flaticon.com/256/3135/3135823.png"
      alt="Imagen 2"
      style={{ width: '50px', marginRight: '10px' }}
    />
  </label>

  <label className="image-option">
    <input
      type="radio"
      value={user?.picture || 'google-login'}
      checked={imagen === (user?.picture || 'google-login')}
      onChange={() => setImagen(user?.picture || 'google-login')}
    />
    {!user ? (
        <GoogleLogin
        onSuccess={(credentialResponse) => {
          const userInfo = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
          setUser({
            name: userInfo.name,
            picture: userInfo.picture,
          });
      
          // Establece el nombre automáticamente si el campo está vacío
          if (!nombre) {
            setNombre(userInfo.name);
          }
          setImagen(userInfo.picture); // Establecer automáticamente como valor de imagen
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />    
    ) : (
      <div className="logged-user">
        <img
          src={user.picture}
          alt={user.name}
          className="user-picture"
          style={{ width: '50px', borderRadius: '50%' }}
        />
        <p className="user-name">{user.name}</p>
      </div>
    )}
  </label>
</div>


        <button className='btnEnviar' type="submit">{t('Send')}</button>
      </form>
      <Slider {...settings}>
        {testimonios.map(testimonio => (
          <div className="testimonio" key={testimonio.id}>
            <div className="testimonio-content">
              <img src={testimonio.imagen} alt={testimonio.nombre} className="testimonio-imagen" />
              <div className="testimonio-texto">
                <p className="testimonio-nombre"><strong>{testimonio.nombre}</strong></p>
                <p className="testimonio-calificacion">{'⭐'.repeat(testimonio.calificacion)}</p>
                <p className="testimonio-comentario">{testimonio.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </GoogleOAuthProvider>
  );
};

export default Testimonios;