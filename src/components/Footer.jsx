// import React from 'react'

// // Errors/Issues found:
// // 1. The <a href="#"> links are placeholders and should ideally be replaced with real URLs or React Router <Link> components for SPA navigation.
// // 2. The <i className="fab fa-..."> icons require Font Awesome to be loaded in the project. If Font Awesome is not included, these icons will not render.
// // 3. The copyright year is hardcoded.
// // 4. The outer <div> is unnecessary as <footer> is a block element and can be returned directly.

// const Footer = () => {
//   return (
//     <footer className="bg-white border-t border-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-sm font-medium text-gray-900 mb-4">Shop</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Skincare</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Sets & Kits</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">New Arrivals</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Best Sellers</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-gray-900 mb-4">Support</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Contact Us</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">FAQ</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Shipping</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Returns</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">About</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Journal</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Careers</a></li>
//               <li><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Press</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-gray-900 mb-4">Follow</h3>
//             <div className="flex space-x-4">
//               {/* These <i> tags require Font Awesome to be loaded in your project */}
//               <i className="fab fa-instagram text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"></i>
//               <i className="fab fa-twitter text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"></i>
//               <i className="fab fa-facebook text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"></i>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-100 mt-8 pt-8 text-center">
//           <p className="text-sm text-gray-600">
//             © 2025 Lumina. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from "react";
import { Mail, MapPin, Phone, AtSign } from "lucide-react";
import FooterButton from "./Footerbutton";

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Newsletter & Company Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b-2 border-gray-300 inline-block pb-1">
              Subscribe to receive exciting offers!
            </h3>
            <form className="flex items-center mt-2 mb-6">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
              {/* Optionally, add a subscribe button here */}
            </form>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="font-semibold text-gray-900">DEMIFINE FASHION PVT LTD</div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 text-gray-500" size={15} />
                <span>
                  Office No. A101/A102, S N - 26/2B, Kensination Court, P. No. - 345, Lane No. 5, Koregaon Park, Pune, Maharashtra, India, 411001.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-gray-500" size={15} />
                <span>+91 9175008322</span>
              </div>
              <div className="flex items-center gap-2">
                <AtSign className="text-gray-500" size={15} />
                <span>care@palmonas.com</span>
              </div>
              <div className="mt-2 text-gray-500">
                We are enhancing our calls line at the moment and will be back soon, till then feel free to drop us an email at:
                <span className="block font-medium text-gray-800">care@palmonas.com</span>
              </div>
            </div>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b-2 border-gray-300 inline-block pb-1">
              Policy
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Shipping & Delivery Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Return & Exchange Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Lifetime Warranty Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Lifetime BuyBack Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Payment Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Grievance Redressal Policy</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b-2 border-gray-300 inline-block pb-1">
              Help
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">FAQ's</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Track Order</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Return & Exchange</a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b-2 border-gray-300 inline-block pb-1">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Blogs</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-gray-900 transition-colors">Stores & Services</a>
              </li>
            </ul>
          </div>
        </div>
    <FooterButton/>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DEMIFINE FASHION PVT LTD. All rights reserved.
        </div>
      </div>
      
    </footer>
    </>
  );
};

export default Footer;
