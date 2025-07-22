// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';

import Home from './pages/Home'
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(0);
  return (

    <>
    <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Row */}
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-light tracking-widest">
              PALMONAS
            </a>
          </div>
          {/* Search Bar */}
          <div className="flex-grow max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Mangalsutra..."
                className="w-full pl-4 pr-10 py-2.5 text-sm bg-[#F6F5F3] border-none !rounded-button focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <i className="fas fa-search text-gray-500 text-sm"></i>
              </button>
            </div>
          </div>

          {/* Icons */}
          
          <div className="flex items-center gap-5">
            <button className="relative cursor-pointer whitespace-nowrap !rounded-button">
           <i class="ri-user-3-fill"></i>
            </button>
            <button className="relative cursor-pointer whitespace-nowrap !rounded-button">
             <i class="ri-heart-add-2-line"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button className="relative cursor-pointer whitespace-nowrap !rounded-button">
            <i class="ri-shopping-bag-4-fill"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Row - Navigation Links */}
        <div className="border-t border-gray-100">
          <div className="flex justify-center items-center gap-8 px-6 py-3">
            {[
              'New Arrivals',
              'Best Seller',
              'Rakhi Special',
              'Silver Luxe',
              ['Lab Grown Diamond', true],
              ['Emily In Paris', true],
              'Shraddha\'s Favourite',
              'Demi fine Jewellery',
              'Gifting',
              'About Us'
            ].map((item, index) => (
              <a
                key={index}
                href={`/${typeof item === 'string' ? item.toLowerCase().replace(' ', '-') : item[0].toLowerCase().replace(' ', '-')}`}
                className={`text-sm hover:text-gray-900 cursor-pointer whitespace-nowrap ${typeof item === 'object' && item[1]
                    ? 'px-2 py-0.5 rounded bg-yellow-100 text-yellow-800'
                    : 'text-gray-700'
                  }`}
              >
                {typeof item === 'string' ? item : item[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
    < Home />
</>

  );
};
export default App