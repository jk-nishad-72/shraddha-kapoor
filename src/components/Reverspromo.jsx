import React from "react";

const Reverspromo = ({ imageUrl, heading, description }) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-y-8 md:gap-x-10 px-4 md:px-12 py-10">
      
      {/* Right: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center  text-center ">
        <h1 className="text-3xl md:text-4xl font-regular text-gray-900 mb-4 leading-tight">
          {heading}
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-64 md:h-[28rem] flex-shrink-0">
        <img
          src={imageUrl}
          alt={heading}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Reverspromo;
