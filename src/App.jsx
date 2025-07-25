// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
import Mainroutes from './routes/Mainroutes';
import Navbar from './components/Navbar';
import { motion ,useScroll} from 'framer-motion';
import './css/App.css';
// import Home from './pages/Home'; // Unused import, can be removed
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'; // Unused imports, can be removed

const App = () => {


  const {scrollYProgress} = useScroll();
  return (
    <>

        <Navbar />
         <motion.div
          className='pinkline h-[2px] fixed top-[116px] w-full z-50 bg-black'
           style={{
            scaleX: scrollYProgress
           }}
          >
         </motion.div>
      <Mainroutes />
      {/* <Home /> */}
    </>
  );
};

export default App;