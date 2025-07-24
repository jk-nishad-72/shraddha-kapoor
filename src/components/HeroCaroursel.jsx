import React from 'react';
import { useSlides } from '../context/Slidescontext'; // adjust path as needed
import '../css/HeroCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const { slides, mobils } = useSlides();


  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className=" carousel">

     <Slider {...settings} className='m-slider'>
       {mobils.map((mobil, index) => (
          <img  key={index} className='m-slide-image' src={mobil.image}/>
       ))}
     </Slider>
     <Slider {...settings} className='slider'>
       {slides.map((slide, index) => (
          <img  key={index} className='slide-image' src={slide.image}/>
       ))}
     </Slider>
        
    </div>
  );
};

export default Carousel;
``