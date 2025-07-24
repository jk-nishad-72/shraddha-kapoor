// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import Home from './pages/Home'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'





const App = () => {

  


  return (

    <>
    <Navbar/>
    <Mainroutes/>
    {/* < Home /> */}
</>

  );
};
export default App