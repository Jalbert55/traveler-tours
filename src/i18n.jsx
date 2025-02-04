import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    Home: 'Home',
                    About: 'About',
                    Magazine: "Traveler's Magazine",
                    Contact: 'Contact',
                    Menu: 'Menu',
                    Open: 'Open',
                    Close: 'Close',
                    HeroTitle: 'WAKE UP YOUR ADVENTUROUS SPIRIT!',
                    HeroSubtitle: 'Discover unique destinations and live unforgettable experiences.',
                    Album: 'Adventure Album',
                    MSI: 'Months Interest Free',
                    Card: 'With or Without Credit Card',
                    AtenPersonalizada: 'Personalized Attention',
                    Asesoramiento: 'Specialized Advice',
                    BigDeals: 'Great Deals and Promotions',
                    Discount: 'Exclusive Discounts',
                    TestimonialTitle: 'What our customers say',
                    Name: 'Name:',
                    Testimonial: 'Testimonial:',
                    Calificacion: 'Rating:',
                    SelectPicture: 'Select a picture:',
                    Send: 'Send',
                    Company: 'Company',
                    Promociones: 'Promotions',
                    BoletinTitle: 'Surprises await you!',
                    BoletinMensaje: 'Sign up for our newsletter and get exclusive offers.',
                    LabelBoletinName: 'Enter your name',
                    LabelBoletinEmail: 'Enter your email',
                    Suscribirse: 'Subscribe',

                    About1: 'We are more than a travel agency. We are your adventure companions, willing to create unique and personalized experiences for each of our clients. With years of experience and a passionate team, we are dedicated to turning your travel dreams into reality.',
                    About2: 'Are you looking for paradisiacal beaches, vibrant cities or majestic mountains?',
                    About3: 'At Traveler Tours, we believe that every trip is unique. We offer you the opportunity to design your perfect adventure, adapting to your tastes, interests and budget. From choosing the destination to planning every detail, we will be with you every step of the way.',
                    About4: 'Our services include:',
                    About5: 'Customized tour packages:',
                    About6: 'Combine flights, hotels and activities to create your ideal trip.',
                    About7: 'Flight reservations:',
                    About8: 'Book your flights with the best airlines and at the best prices.',
                    About9: 'Hotel reservations:',
                    About10: 'Choose from a wide range of hotels and resorts, from budget-friendly options to luxury accommodations.',
                    About11: 'Unique experiences:',
                    About12: 'From adventure activities to cultural experiences, we will help you create unforgettable memories.',
                    About13: 'Your trip, your way.',

                    Comunicate: 'Get in touch with us',
                    Preguntas: 'Do you have any questions or need help? Feel free to contact us!',
                    Derechos: '© 2025 TravelerTours All rights reserved.',
                    Diseñado: 'Designed by Ing. José Alberto Mendoza',

                    Blog: 'Traveler’s Blog',

                    Contactanos: 'Contact Us',
                    Email: 'Email',
                    Phone: 'Phone',
                    Mensaje: 'Message',
                    SendOK: 'Message sent successfully!',
                    SendFail: 'Error sending message. Try again.',
                }
            },
            es: {
                translation: {
                    Home: 'Inicio',
                    About: 'Sobre Nosotros',
                    Magazine: 'Revista Digital',
                    Contact: 'Contacto',
                    Menu: 'Menú',
                    Open: 'Abrir',
                    Close: 'Cerrar',
                    HeroTitle: 'DESPIERTA TU ESPÍRITU AVENTURERO!',
                    HeroSubtitle: 'Descubre destinos únicos y vive experiencias inolvidables.',
                    Album: 'Álbum de Aventuras',
                    MSI: 'Meses sin Intereses',
                    Card: 'Con o sin Tarjeta de Crédito',
                    AtenPersonalizada: 'Atención personalizada',
                    Asesoramiento: 'Asesoramiento especializado',
                    BigDeals: 'Grandes ofertas y promociones',
                    Discount: 'Descuentos exclusivos',
                    TestimonialTitle: 'Por favor, comparta sus experiencias con nosotros',
                    Name: 'Nombre:',
                    Testimonial: 'Testimonio:',
                    Calificacion: 'Calificación:',
                    SelectPicture: 'Selecciona una imagen:',
                    Send: 'Enviar',
                    Company: 'Compañía',
                    Promociones: 'Promociones',
                    BoletinTitle: '¡Sorpresas te esperan!',
                    BoletinMensaje: 'Suscríbete a nuestro boletín y sé el primero en conocer nuestras promociones exclusivas.',
                    LabelBoletinName: 'Ingresa tu nombre',
                    LabelBoletinEmail: 'Ingresa tu correo electrónico',
                    Suscribirse: 'Suscribirse',

                    About1: 'Somos más que una agencia de viajes. Somos tus compañeros de aventura, dispuestos a crear experiencias únicas y personalizadas para cada uno de nuestros clientes. Con años de experiencia y un equipo apasionado, nos dedicamos a transformar tus sueños de viaje en realidad.',
                    About2: '¿Buscas playas paradisíacas, ciudades vibrantes o montañas majestuosas?',
                    About3: 'En Traveler Tours, creemos que cada viaje es único. Te ofrecemos la oportunidad de diseñar tu aventura perfecta, adaptándonos a tus gustos, intereses y presupuesto. Desde la elección del destino hasta la planificación de cada detalle, estaremos contigo en cada paso del camino.',
                    About4: 'Nuestros servicios incluyen:',
                    About5: 'Paquetes turísticos personalizados:',
                    About6: 'Combina vuelos, hoteles y actividades para crear tu viaje ideal.',
                    About7: 'Reservas de vuelos:',
                    About8: 'Encuentra las mejores opciones de vuelos a los destinos más populares.',
                    About9: 'Reservas de hoteles:',
                    About10: 'Desde hoteles de lujo hasta opciones más económicas, tenemos lo que buscas.',
                    About11: 'Experiencias únicas:',
                    About12: 'Explora tours guiados, actividades al aire libre y mucho más.',
                    About13: 'Tu viaje, tu estilo.',

                    Comunicate: 'Comunícate con nosotros',
                    Preguntas: '¿Tienes alguna pregunta o necesitas ayuda? ¡No dudes en contactarnos!',
                    Derechos: '© 2025 TravelerTours Todos los derechos reservados.',
                    Diseñado: 'Diseñado por Ing. José Alberto Mendoza',

                    Blog: 'Blog del Viajero',

                    Contactanos: 'Contáctanos',
                    Email: 'Correo Electrónico',
                    Phone: 'Teléfono',
                    Mensaje: 'Mensaje',
                    SendOK: '¡Mensaje enviado correctamente!',
                    SendFail: 'Error al enviar el mensaje. Intente nuevamente.',
                }
            }
          },
          lng: "es", // idioma por defecto
          fallbackLng: "en", // idioma de reserva
          interpolation: {
            escapeValue: false // react ya se encarga de la seguridad
          }
        });
      
      export default i18n;