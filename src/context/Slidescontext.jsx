
import { createContext, useContext, useState } from 'react';

const SlidesContext = createContext();

export const SlidesProvider = ({ children }) => {
  const [slides, setSlides] = useState([
    
    { image: "./images/1.png", title: "image_1" },
    { image: "./images/2.png", title: "image_2" },
    { image: "./images/3.png", title: "image_3" },
    { image: "./images/4.png", title: "image_4" },
    { image: "./images/5.png", title: "image_5" },
  
  ]);

    const [mobils, setmobils] = useState([
        { image: "./images/mobil1.png", title: "image_1" },
        // { image: "./images/mobil2.png", title: "image_2" },
        { image: "./images/mobil4.png", title: "image_4" },
       
    ])

  return (
    <SlidesContext.Provider value={{ slides, setSlides, mobils, setmobils }}>
      {children}
    </SlidesContext.Provider>
  );
};

// Custom hook for easy access
export const useSlides = () => useContext(SlidesContext);
