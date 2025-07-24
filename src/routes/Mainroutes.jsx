import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'  
import Account from '../pages/Account'
import Product from '../pages/Product'
import About from '../pages/About'
import ProductDetail from '../pages/ProductDetail'
import Signup from '../components/Signup'

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/productdetail/:id' element={<ProductDetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default Mainroutes