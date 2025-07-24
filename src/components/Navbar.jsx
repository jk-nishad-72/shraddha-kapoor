import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

let tl = gsap.timeline();

useGSAP(() => {
	// gsap code here...
	tl.from('.logo', { 
    y:-50,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  })
  tl.from('.search, .search2', { 
    y:-50,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  })
  tl.from('.icons', { 
    y:-50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.inOut"
  })  
  tl.from('.nav-links', { 
    y:-50,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.2
  })

}); 

  
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(1);
  
  return (
  <>
  <nav className="nav w-full bg-white border-b border-gray-100 fixed top-0 z-50">
      <div className="n-small wfull mx-auto">

        {/* Top Row */}
        <div className="n-top flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="logo flex-shrink-0">
             <a href=""><i class="ri-menu-2-fill text-xl menu"></i></a>
            <a href="/" className="text-xl font-light tracking-widest">
              PALMONAS
            </a>
          </div>
          {/* Search Bar */}
          <div className="search flex-grow max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Mangalsutra..."
                className="w-full pl-4 pr-10 py-2.5 text-sm bg-[#f1eee4] border-none !rounded-button focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                {/* <i className="fas fa-search text-gray-500 text-sm"></i> */}
                <i class="ri-search-line text-gray-500 text-md"></i>
              </button>
            </div>
          </div>
        

          {/* Icons */}
          
          <div className="n-icons flex items-center gap-5">
            <button className="icons relative cursor-pointer whitespace-nowrap !rounded-button">
            <Link to="/account">
            <i class="ri-user-3-line text-2xl ic "></i>
            </Link> 
            </button>
            <button className="icons relative cursor-pointer whitespace-nowrap !rounded-button">
            <i class="ri-heart-line text-2xl ic "></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button className="icons relative cursor-pointer whitespace-nowrap !rounded-button">
            <i class="ri-shopping-bag-3-line  text-2xl ic "></i>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

           {/* Search Bar 2 */}
           <div className="search2 flex-grow max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Mangalsutra..."
                className="w-full pl-4 pr-10 py-2.5 text-sm bg-[#f1eee4] border-none !rounded-button focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                {/* <i className="fas fa-search text-gray-500 text-sm"></i> */}
                <i class="ri-search-line text-gray-500 text-md"></i>
              </button>
            </div>
          </div>

        {/* Bottom Row - Navigation Links */}
        <div className="n-btm border-t border-gray-100">

          <div className="flex justify-center items-center gap-8 px-6 py-3">
            {[
              ['Home','/'],
              ['Best Seller','/product'],
              ['Rakhi Special','/product'],
              ['Silver Luxe','/product'],
              ['Lab Grown Diamond', '/product'],
              ['Emily In Paris', '/product'],
              ['Shraddha\'s Favourite', '/product'],
              ['Demi fine Jewellery', '/product'],
              ['Gifting', '/product'],
              ['About Us', '/about']
            ].map(([item, path], index) => (
              <Link
                key={index}
                to={path}
                // href={`/${typeof item === 'string' ? item.toLowerCase().replace(' ', '-') : item[0].toLowerCase().replace(' ', '-')}`}
                className={`nav-links text-sm hover:text-gray-900 cursor-pointer whitespace-nowrap ${typeof item === 'object' && item[1]
                    ? 'px-2 py-0.5 rounded bg-yellow-100 text-yellow-800'
                    : 'text-gray-700'
                  }`}
              >
                {typeof item === 'string' ? item : item[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>




  </>
  )
}

export default Navbar