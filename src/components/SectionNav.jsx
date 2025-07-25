import React from "react";
import { Link } from "react-router-dom";

const SectionNav = ({ title, currentPage }) => {
  return (
    <div className="w-full flex flex-col items-center py-10 px-4 border-1 mt-10 mb-10 border-gray-200 ">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 text-center tracking-tight">
        {title}
      </h1>
      <nav className="flex items-center text-sm text-gray-500 space-x-2" aria-label="Breadcrumb">
        <Link to={"/"} className="hover:text-pink-600 transition-colors cursor-pointer">Home</Link>
        <span className="mx-1 text-gray-400">/</span>
        <span className="text-gray-700 font-medium">{title}</span>
      </nav>
    </div>
  );
};

export default SectionNav;
