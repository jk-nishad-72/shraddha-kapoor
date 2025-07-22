import React from 'react'

const Footer = () => {
  return (
    <div>
          {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Skincare</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Sets & Kits</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">New Arrivals</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Best Sellers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Shipping</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Journal</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Follow</h3>
              <div className="flex space-x-4">
                <i className="fab fa-instagram text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"></i>
                <i className="fab fa-twitter text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"></i>
                <i className="fab fa-facebook text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2025 Lumina. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

   
    </div>
  )
}

export default Footer