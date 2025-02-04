import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import axios from 'axios';

const getSlidesData = async () => {
  const response = await axios.get('https://cafe-mt.b-cdn.net/mtmediacafe/mega-slider/xml/promos.xml');
  const slides = response.data.getElementsByTagName('megapromo');
  const slidesData = [];

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const nombre = slide.getElementsByTagName('nombre')[0].textContent;
    const clv = slide.getElementsByTagName('clv')[0].textContent;
    const imageUrl = `https://cafe-mt.b-cdn.net/mtmediacafe/mega-slider/${i + 1}.jpg`;

    slidesData.push({ nombre, clv, imageUrl });
  }

  return slidesData;
};

const SliderComponent = () => {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    getSlidesData().then((data) => setSlidesData(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index}>
          <a href={`catalogo-viajes.php?viaje=${slide.clv}`}>
            <img src={slide.imageUrl} title={slide.nombre} alt={slide.nombre} />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent; // Export the component for use in other components