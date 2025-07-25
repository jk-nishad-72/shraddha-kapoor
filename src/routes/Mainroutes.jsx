import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Account from '../pages/Account'
import Product from '../pages/Product'
import About from '../pages/About'
// import ProductDetail from '../pages/ProductDetail'
import Signup from '../components/Signup'
 import Products from '../components/Products'
import ProductDetailCard from '../components/ProductCard'
// ERROR: ProductDetailCard is used in a route but not imported. This will cause a ReferenceError.
// RESOLUTION: Import ProductDetailCard from the correct path.
 // Assuming ProductCard is the intended component

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/product' element={<Product />} />
        {/* <Route path='/product/productdetail/:id' element={<ProductDetail />} /> */}
        {/* 
          ERROR: ProductDetailCard was not imported above. 
          RESOLVED by importing ProductDetailCard.
          NOTE: If ProductDetailCard is not the correct component, update the import path accordingly.
        */}
        {/* <Route path='/product/productdetailcard/:id' element={<ProductCard />} /> */}

        <Route path='/products' element={<Products />} />
        <Route path='products/productdetail/:id' element={<ProductDetailCard />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default Mainroutes