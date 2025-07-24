// import { FaUser, FaLock } from "react-icons/fa";

// export default function Signup() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
//         {/* Right side - Form */}
//         <div className="w-full md:w-1/2 p-8 space-y-6">
//           <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>

//           <div className="relative">
//             <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="email"
//               placeholder="Email"
//               className="pl-10 w-full py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           <div className="relative">
//             <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="password"
//               placeholder="Password"
//               className="pl-10 w-full py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
//             Sign Up
//           </button>

//           <p className="text-sm text-center">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-600 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>

//         {/* Left side - Message */}
//         <div className="hidden md:flex w-full md:w-1/2 bg-black text-white flex-col items-center justify-center p-8">
//           <h2 className="text-3xl font-bold mb-2">BACK!</h2>
//           <p className="text-center text-sm">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenti?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 relative overflow-hidden">
      <div className="flex flex-col md:flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full relative z-10">
        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-8 bg-white relative z-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <User className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white"
              />
            </div>
            {/* Email Field */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Mail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white"
              />
            </div>
            {/* Password Field */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Lock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/account"
              className="text-black font-semibold hover:underline transition-all duration-200"
            >
              Login
            </Link>
          </p>
        </div>
        {/* Left side - Message with Diagonal Divider */}
        <div className="hidden md:block w-full md:w-1/2 relative">
          {/* Diagonal Cut Effect */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
            }}
          ></div>
          <div className="relative h-full flex flex-col justify-center items-center p-12 text-white z-10">
            <h2 className="text-4xl font-semibold mb-4 tracking-wide"> Welcome to Palmonas!</h2>
            <p className="text-center text-base leading-relaxed max-w-md">
           
            India's 1st Demifine Jewellery Brand
            </p>
          </div>
        </div>
      </div>
      {/* Mobile - Left Side Background */}
      <div className="md:hidden absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
    </div>
  );
}




