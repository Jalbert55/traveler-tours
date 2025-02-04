import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousell.css';

const Carrousell = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchCarrousell = async () => {
      try {
        const response = await axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/carrousel-main');
        setCarouselData(response.data.collection);
      } catch (error) {
        console.error('Error fetching Carrousell:', error);
      }
    };

    fetchCarrousell();
  }, []);

  const slidesSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Carrousell-container">
      <Slider {...slidesSettings}>
        {carouselData.map((promo) => (
          <div className="carousel-item" key={promo.mt}>
            <img className="carousel-item-image" src={promo.img1} alt={promo.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousell;