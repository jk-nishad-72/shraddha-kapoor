import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slides from './slides'; // Assuming you moved slides into slides.js

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrent(index);

  // Autoplay effect
  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => clearInterval(autoplayRef.current);
  }, [current, isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const currentSlide = slides[current];

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden font-sans antialiased bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
        aria-label={currentSlide.alt}
      >
        <div className="absolute inset-0 flex items-center justify-end p-8 md:p-16 lg:p-24 bg-black/30">
          <div className="w-full md:w-2/5 lg:w-1/3 text-right text-white z-10">
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-2 font-serif">
              {currentSlide.intro}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-4">
              {currentSlide.title}
            </h2>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-normal font-serif leading-snug whitespace-pre-line mb-6">
              {currentSlide.subtitle}
            </h3>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-gray-800 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
              {currentSlide.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-3 rounded-full text-black hover:bg-opacity-50 z-20">
        <ChevronLeft size={32} />
      </button>

      <button onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 p-3 rounded-full text-black hover:bg-opacity-50 z-20">
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white w-5' : 'bg-white bg-opacity-50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
