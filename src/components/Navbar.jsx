import React from 'react'

const Navbar = () => {
  return (
    <div>
       {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-light tracking-wide text-gray-900">
              LUMINA
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Journal</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <i className="fas fa-search text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"></i>
              <i class="ri-heart-add-line  text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"></i>
              {/* <i className="fas fa-shopping-bag text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"></i> */}
              <i class=" text-gray-600 cursor-pointer hover:text-gray-900 transition-colors ri-shopping-bag-4-fill"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar