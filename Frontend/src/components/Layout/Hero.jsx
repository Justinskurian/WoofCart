import React from "react";
import heroimg from "../../assets/Cover-Dog.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <img
        src={heroimg}
        alt="WoofCart"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black-opacity-5 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16 lg:px-24">
          <div className="text-white z-20 space-y-4 text-left">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight leading-tight">
              For paws<br />that matter
            </h1>
            <p className="text-sm md:text-lg lg:text-xl tracking-tight">
              Tail-wagging essentials crafted with care.
            </p>
            <Link
              to="#"
              className="inline-block bg-white text-gray-950 px-6 py-2 rounded-2xl text-base md:text-lg font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
