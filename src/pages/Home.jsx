import React from 'react'
import Navbar from '../components/Navbar'
// import Hero from '../components/Hero' // Unused import, can be removed
import Product from '../pages/Product'
import Footer from '../components/Footer'
import HeroCarousel from '../components/HeroCaroursel' // Typo: should be 'HeroCarousel' not 'HeroCaroursel'
import Faq from '../components/Faq'
import Products from '../components/Products'


const Home = () => {
  return (
    <>
      {/* Navbar is imported but not used. If you want the Navbar to appear, add <Navbar /> here */}
      <div>
        <HeroCarousel />
        <Product />
        <Faq />
        <Footer />
      </div>
    </>
  )
}

export default Home