// Error review and comments added inline

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSlides } from '../context/Slidescontext';

// Helper to check device type
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(() => {
    if (typeof window === 'undefined') return 'desktop';
    if (window.innerWidth <= 768) return 'mobile';
    if (window.innerWidth <= 1024) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setDeviceType('mobile');
      else if (window.innerWidth <= 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

const HeroCarousel = () => {
  const { slides, mobils } = useSlides();
  const deviceType = useDeviceType();

  // Defensive: slides and mobils should be arrays
  // If useSlides() returns undefined, this will error
  // Could add: const slidesArr = Array.isArray(slides) ? slides : [];
  // But assuming context is always correct for now

  // For desktop/laptop/tablet (slides)
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // For mobile (mobils)
  const [currentMobile, setCurrentMobile] = useState(0);
  const timeoutMobileRef = useRef(null);

  // Desktop/Laptop/Tablet: slides auto-advance
  useEffect(() => {
    // Error: If slides is undefined or empty, slides.length will error
    if ((deviceType === 'desktop' || deviceType === 'tablet') && slides && slides.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [current, deviceType, slides?.length]);

  // Mobile: mobils auto-advance
  useEffect(() => {
    // Error: If mobils is undefined or empty, mobils.length will error
    if (deviceType === 'mobile' && mobils && mobils.length > 0) {
      timeoutMobileRef.current = setTimeout(() => {
        setCurrentMobile((prev) => (prev === mobils.length - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearTimeout(timeoutMobileRef.current);
    }
  }, [currentMobile, deviceType, mobils?.length]);

  // Navigation handlers
  const nextSlide = () => {
    if (!slides || slides.length === 0) return;
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    if (!slides || slides.length === 0) return;
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextMobileSlide = () => {
    if (!mobils || mobils.length === 0) return;
    setCurrentMobile((prev) => (prev === mobils.length - 1 ? 0 : prev + 1));
  };
  const prevMobileSlide = () => {
    if (!mobils || mobils.length === 0) return;
    setCurrentMobile((prev) => (prev === 0 ? mobils.length - 1 : prev - 1));
  };

  // Desktop/Laptop/Tablet Carousel (slides)
  const renderSlidesCarousel = () => (
    <div
      className={`relative w-full h-screen mt-10 overflow-hidden ${
        deviceType === 'desktop' || deviceType === 'tablet'
          ? 'block'
          : 'hidden'
      }`}
    >
      <AnimatePresence>
        {(slides || []).map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.8 }}
            >
              {/* Overlay content can go here */}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:scale-110 transition p-3 rounded-full z-10"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:scale-110 transition p-3 rounded-full z-10"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
      {/* Dot Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center items-center gap-2">
        {(slides || []).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );

  // Mobile Carousel (mobils) - full width, height according to mobile screen
  // Height is now 90% of viewport height for mobile
  const getMobileHeight = () => {
    if (typeof window !== 'undefined') {
      // 90% of viewport height, but not more than 900px, not less than 350px
      return Math.max(350, Math.min(window.innerHeight * 0.9, 900));
    }
    // Fallback
    return 500;
  };

  const [mobileHeight, setMobileHeight] = useState(getMobileHeight());

  useEffect(() => {
    if (deviceType === 'mobile') {
      const handleResize = () => {
        setMobileHeight(getMobileHeight());
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [deviceType]);

  const renderMobileCarousel = () => (
    <div
      className="relative w-full mt-10 overflow-hidden block md:hidden"
      style={{
        height: mobileHeight,
        borderRadius: '0.5rem', // 8px, as per instruction
        maxWidth: '100vw',
      }}
    >
      <AnimatePresence>
        {(mobils || []).map((mobil, index) =>
          index === currentMobile ? (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={mobil.image}
                alt={mobil.title || `slide-${index}`}
                className="w-full h-full object-cover"
                draggable={false}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  background: '#000',
                  borderRadius: '0.5rem', // 8px, as per instruction
                  width: '100%',
                  height: '100%',
                  maxHeight: mobileHeight,
                }}
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      {/* Navigation Arrows */}
      <button
        onClick={prevMobileSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:scale-110 transition p-2 rounded-full z-50"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextMobileSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:scale-110 transition p-2 rounded-full z-50"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
      {/* Dot Indicators */}
      <div className="absolute bottom-3 w-full flex justify-center items-center gap-2 z-50">
        {(mobils || []).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentMobile(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentMobile ? 'bg-white' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {deviceType === 'mobile'
        ? renderMobileCarousel()
        : renderSlidesCarousel()}
    </>
  );
};

export default HeroCarousel;

// Error summary:
// 1. If slides or mobils is undefined, code will throw (fixed by fallback to [] in map and checks in handlers).
// 2. If slides or mobils is empty, carousel will not show anything (expected).
// 3. No other major errors found. Typo in file name: should be HeroCarousel.jsx, not HeroCaroursel.jsx.
