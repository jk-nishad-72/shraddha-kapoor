// import React from 'react'
// import '../css/Account.css'
// import { SignIn, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

// const Account = () => {
//   return (
//     <div className='account-container'>
//       <h1>
        
//         Account
        
//         <SignedOut>
//         <SignInButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>


//       </h1>
//     </div>
//   )
// }

// export default Account
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import Signup from "../components/Signup";

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Centered Login Form */}
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full relative z-10">
        {/* Left Side - Sign In Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative z-10">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">Sign In</h1>
              <p className="text-gray-600">Welcome back! Please sign in to your account</p>
            </div>
            
            <form className="space-y-6">
              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white text-black"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 bg-white text-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="text-black font-semibold hover:underline transition-all duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Welcome Section with Diagonal Cut */}
        <div className="hidden lg:block w-full lg:w-1/2 relative">
          {/* Diagonal Cut Effect */}
          <div 
            className="absolute inset-0 bg-black"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }}
          >
            <div className="h-full flex flex-col justify-center items-center p-12 text-white">
              <h2 className="text-5xl font-semibold mb-8 tracking-wide">
                WELCOME <br />
              </h2>
              <div className="text-lg leading-relaxed text-white max-w-md text-center">
                <p className="mb-4">

                   To <img className="invert" src="./images/logo.png" alt="logo" />
         
                  
                </p>
                <p>
                India's 1st Demifine Jewellery Brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Right Side Background */}
      <div className="lg:hidden absolute inset-0 bg-black opacity-5"></div>
    </div>
  );
}
