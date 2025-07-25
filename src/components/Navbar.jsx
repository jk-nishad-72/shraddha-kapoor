import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

// No error in navLinks array structure
const navLinks = [
  ['Home', '/'],
  ['Best Seller', '/product'],
  ['Rakhi Special', '/product'],
  ['Silver Luxe', '/product'],
  ['Lab Grown Diamond', '/product'],
  ['Emily In Paris', '/product'],
  ["Shraddha's Favourite", '/product'],
  ['Demi fine Jewellery', '/product'],
  ['Gifting', '/product'],
  ['About Us', '/about'],
];

const Navbar = () => {
  // ERROR: gsap.registerPlugin(useGSAP) is incorrect.
  // useGSAP is a React hook, not a GSAP plugin.
  // The correct usage is to just call useGSAP inside the component.
  // gsap.registerPlugin is for GSAP plugins like ScrollTrigger, not for hooks.
  // So, remove gsap.registerPlugin(useGSAP);

  // let tl = gsap.timeline(); // This is fine, but should be inside the useGSAP callback for best practice.

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.logo', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
    tl.from('.search, .search2', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
    tl.from('.icons', {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.inOut',
    });
    tl.from('.nav-links', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
    });
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on link click (for mobile)
  const handleSidebarLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-[100] bg-black bg-opacity-40 transition-opacity duration-300 ${sidebarOpen ? 'block md:hidden' : 'hidden'
          }`}
        onClick={() => setSidebarOpen(false)}
        style={{}}
      ></div>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-[101] shadow-lg transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <span className="text-xl font-light tracking-widest">PALMONAS</span>
          <button
            className="text-2xl"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 py-4">
          {navLinks.map(([item, path], index) => (
            <Link
              key={index}
              to={path}
              className="nav-links text-base py-2 px-2 rounded  text-gray-700"
              onClick={handleSidebarLinkClick}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 px-6 py-4 border-t border-gray-100">
          <Link to="/account" onClick={handleSidebarLinkClick}>
            <i className="ri-user-3-line text-2xl ic"></i>
          </Link>
          <button className="relative">
            <i className="ri-heart-line text-2xl ic"></i>
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          <button className="relative">
            <i className="ri-shopping-bag-3-line text-2xl ic"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </aside>

      <nav className="nav w-full bg-white border-b border-gray-100 fixed top-0 z-50">
        <div className="n-small wfull mx-auto">
          {/* Top Row */}
          <div className="n-top flex items-center justify-between px-8 py-4">
            {/* Logo and Menu Icon */}
            <div className="logo flex-shrink-0 flex items-center gap-2">
              {/* Menu icon only on mobile */}
              <button
                className="block md:hidden focus:outline-none"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
                type="button"
              >
                <i className="ri-menu-2-fill text-xl menu"></i>
              </button>
              <a href="/" className="text-xl font-light tracking-widest">
                PALMONAS
              </a>
            </div>
            {/* Search Bar */}
            <div className="search flex-grow max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for Mangalsutra..."
                  className="w-full pl-4 pr-10 py-2.5 text-sm bg-[#f1eee4] border-none !rounded-button focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <i className="ri-search-line text-gray-500 text-md"></i>
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="n-icons flex items-center gap-5">
              <button className="icons relative cursor-pointer whitespace-nowrap !rounded-button">
                <Link to="/account">
                  <i className="ri-user-3-line text-2xl ic"></i>
                </Link>
              </button>
              <button className="icons relative cursor-pointer whitespace-nowrap !rounded-button">
                <i className="ri-heart-line text-2xl ic"></i>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button className="icons relative cursor-pointer whitespace-nowrap !rounded-button">
                <i className="ri-shopping-bag-3-line  text-2xl ic"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar 2 - Only on mobile */}
          <div className="search2 flex-grow max-w-2xl mx-8 block md:hidden">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Mangalsutra..."
                className="w-full pl-4 pr-10 py-2.5 text-sm bg-[#f1eee4] border-none !rounded-button focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <i className="ri-search-line text-gray-500 text-md"></i>
              </button>
            </div>
          </div>

          {/* Bottom Row - Navigation Links (hidden on mobile) */}
          <div className="n-btm border-t border-gray-100 hidden md:block">
            <div className="flex justify-center items-center gap-8 px-6 py-3">
              {navLinks.map(([item, path], index) => (
                <Link
                  key={index}
                  to={path}
                  className={`nav-links text-sm hover:text-gray-900 cursor-pointer whitespace-nowrap text-gray-700`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

        
    </>
  );
};

export default Navbar;