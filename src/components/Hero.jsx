// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import '../css/Hero.css'


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="hero-container min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url('https://readdy.ai/api/search-image?query=elegant%20woman%20wearing%20delicate%20gold%20jewelry%20necklace%20and%20earrings%20against%20soft%20cream%20background%20with%20natural%20lighting%20luxury%20fashion%20photography%20minimalist%20aesthetic%20clean%20composition%20high%20end%20jewelry%20brand&width=1440&height=810&seq=hero001&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px'
          }}
        />
        {/* Content Container */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 leading-tight"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                letterSpacing: '0.5px',
                fontWeight: 300
              }}
            >
              Timeless Elegance<br />
              Crafted for You
            </h1>
            {/* Subheading */}
            <p
              className="text-base md:text-lg font-light text-gray-600 mb-6 md:mb-8 max-w-md leading-relaxed"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 300,
                lineHeight: 1.6
              }}
            >
              Discover our exclusive collection of handcrafted jewelry pieces,
              where contemporary design meets traditional artistry to create
              heirloom-quality treasures.
            </p>
            {/* CTA Button */}
            <button
              className="group relative overflow-hidden border border-gray-900 bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white px-6 md:px-8 py-3 md:py-4 !rounded-button whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out text-sm md:text-base"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '1px',
                fontWeight: 400,
                textTransform: 'uppercase'
              }}
            >
              <span className="relative z-10">Discover Collection</span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
            </button>
          </div>
        </div>
        {/* Decorative Line Elements */}
        <div className={`hidden lg:block absolute top-1/2 right-16 transform -translate-y-1/2 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <div className="w-px h-16 md:h-24 bg-gray-300"></div>
          <div className="w-6 md:w-8 h-px bg-gray-300 mt-4"></div>
        </div>
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-center cursor-pointer group">
            <span
              className="text-xs text-gray-500 mb-2 group-hover:text-gray-700 transition-colors duration-300"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              Scroll
            </span>
            <div className="w-px h-8 bg-gray-300 group-hover:bg-gray-500 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );

};
export default Hero