import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from "../context/ProductContext";
import '../css/Product.css';
import Hero from '../components/Hero';
import Products from '../components/Products';
import SectionNav from '../components/SectionNav';
import Footer from '../components/Footer';

// The following import had a typo: ProductDetailCard should be ProductCard


const Product = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { setSelectedProduct } = useProduct();
  return (
    <div className="product-container bg-white">
   
   <Hero />
      < SectionNav title="BEST SELLERS" currentPage="Products" />
      {/* Product Grid Section */}
         <Products />
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
                aria-label="Email address"
              />
              <button
                type="button"
                className="bg-gray-900 text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
