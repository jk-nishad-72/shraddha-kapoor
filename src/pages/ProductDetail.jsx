import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import '../css/ProductDetail.css'
import { useProduct } from "../context/ProductContext";

const ProductDetail = () => {
  const {id} = useParams();const { selectedProduct } = useProduct();

  if (!selectedProduct) return <div className="p-4 text-red-500">No product selected.</div>;


  return (
    <div className='product-detail-container'>
       <div className="w-full flex mx-auto py-15 px-20 gap-10 justify-between items-center relative">
        
        <Link to='/product' className='text-black absolute top-20 left-25'>
      <button><i class="ri-arrow-left-s-line text-4xl bg-white rounded-full p-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer transform hover:scale-110 "></i></button>
      </Link>

      <img src={selectedProduct.image} alt={selectedProduct.name} className="w-[40%]  rounded-sm mb-6" />

 <div className='w-1/2'>

  <h1 className="text-3xl font-bold mb-6">{selectedProduct.name}</h1>
      <p className="text-xl text-gray-700 mb-2">Price: {selectedProduct.price}</p>
      <p className="text-md text-gray-500 mb-6">Variants: {selectedProduct.variants}</p>
      <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition">
        Add to Cart
      </button>
 </div>
      
    </div>
    
      

    </div>
  )
}

export default ProductDetail