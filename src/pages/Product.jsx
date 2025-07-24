// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { link } from 'framer-motion/client';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { useProduct } from "../context/ProductContext";
import '../css/Product.css'
import Hero from '../components/Hero'
const Product = () => {

  const [hoveredProduct, setHoveredProduct] = useState ([]);
  const { setSelectedProduct } = useProduct();

  const products = [
    {
      id: 1,
      name: 'Luminous Glow Serum',
      price: '$68',
      variants: '2 sizes available',
      image: 'https://readdy.ai/api/search-image?query=elegant%20minimalist%20skincare%20serum%20bottle%20with%20clean%20white%20background%20and%20soft%20natural%20lighting%20creating%20premium%20cosmetic%20product%20photography%20with%20subtle%20shadows%20and%20modern%20aesthetic&width=320&height=320&seq=prod1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Cloud Cream Moisturizer',
      price: '$45',
      variants: '3 formulas available',
      image: 'https://readdy.ai/api/search-image?query=luxurious%20white%20cream%20jar%20with%20minimalist%20design%20on%20clean%20white%20background%20featuring%20soft%20studio%20lighting%20and%20premium%20cosmetic%20packaging%20with%20elegant%20shadows&width=320&height=320&seq=prod2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Pure Cleansing Oil',
      price: '$52',
      variants: '2 scents available',
      image: 'https://readdy.ai/api/search-image?query=sophisticated%20glass%20bottle%20with%20golden%20oil%20and%20pump%20dispenser%20on%20pristine%20white%20background%20with%20professional%20product%20photography%20lighting%20and%20minimal%20aesthetic%20design&width=320&height=320&seq=prod3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Radiance Face Mist',
      price: '$38',
      variants: '4 variants available',
      image: 'https://readdy.ai/api/search-image?query=sleek%20spray%20bottle%20with%20transparent%20liquid%20on%20clean%20white%20background%20featuring%20modern%20minimalist%20design%20and%20professional%20cosmetic%20photography%20with%20soft%20shadows&width=320&height=320&seq=prod4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Gentle Exfoliating Scrub',
      price: '$42',
      variants: '2 textures available',
      image: 'https://readdy.ai/api/search-image?query=modern%20tube%20packaging%20with%20clean%20white%20background%20and%20premium%20skincare%20product%20photography%20featuring%20minimalist%20design%20and%20professional%20studio%20lighting%20with%20subtle%20reflections&width=320&height=320&seq=prod5&orientation=squarish'
    },
    {
      id: 6,
      name: 'Nourishing Night Cream',
      price: '$75',
      variants: '1 formula available',
      image: 'https://readdy.ai/api/search-image?query=elegant%20cream%20jar%20with%20luxurious%20packaging%20on%20pristine%20white%20background%20featuring%20high%20end%20cosmetic%20photography%20with%20soft%20lighting%20and%20minimalist%20aesthetic%20design&width=320&height=320&seq=prod6&orientation=squarish'
    },
    {
      id: 7,
      name: 'Vitamin C Brightening Drops',
      price: '$58',
      variants: '2 concentrations available',
      image: 'https://readdy.ai/api/search-image?query=premium%20dropper%20bottle%20with%20amber%20glass%20and%20clean%20white%20background%20featuring%20professional%20product%20photography%20with%20minimalist%20styling%20and%20elegant%20shadows&width=320&height=320&seq=prod7&orientation=squarish'
    },
    {
      id: 8,
      name: 'Hydrating Lip Balm Set',
      price: '$24',
      variants: '5 shades available',
      image: 'https://readdy.ai/api/search-image?query=collection%20of%20sleek%20lip%20balm%20tubes%20arranged%20on%20clean%20white%20background%20with%20modern%20minimalist%20design%20and%20professional%20cosmetic%20photography%20featuring%20soft%20studio%20lighting&width=320&height=320&seq=prod8&orientation=squarish'
    }
  ];
  

  return (
    <div className="product-container  bg-white">

   < Hero />

     
 
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Essential Skincare
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover our curated collection of premium skincare essentials, 
              thoughtfully formulated for radiant, healthy skin.
            </p>
          </div>
        </div>
      </section> 

      {/* Product Grid Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8">
            {products.map((product) => (
              <Link
                to={`/product/productdetail/${product.id}`}
                key={product.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image Container */}
                <div className="relative aspect-square bg-gray-50 rounded-sm overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Quick View Button - Desktop Only */}
                  <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  } hidden lg:flex`}>
                    <button className="bg-white text-gray-900 px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-1">
                  <h3 className="text-sm md:text-base font-medium text-gray-900 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {product.variants}
                  </p>
                  <p className="text-sm md:text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>

                {/* Mobile Quick View Button */}
                <button className="w-full mt-3 bg-gray-900 text-white py-2 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors lg:hidden !rounded-button whitespace-nowrap">
                  Quick View
                </button>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-gray-900 text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              View All Products
            </button>
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive updates on new products and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-colors !rounded-button"
              />
              <button className="bg-gray-900 text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Product;
