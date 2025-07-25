// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React from 'react';
import Mainroutes from './routes/Mainroutes';
import Navbar from './components/Navbar';
// import Home from './pages/Home'; // Unused import, can be removed
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'; // Unused imports, can be removed

const App = () => {
  return (
    <>
      <Navbar />
      <Mainroutes />
      {/* <Home /> */}
    </>
  );
};

export default App;