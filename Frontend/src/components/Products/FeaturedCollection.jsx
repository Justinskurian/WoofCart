import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/Featured.webp";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-3xl">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-700">
            Bundles & Starter Kits
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Everything Your Dog Needs — In One Easy Pack
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Simplify shopping with our all-in-one bundles, tailored for every
            stage of your dog’s life. Whether you’re welcoming a new puppy or
            refreshing essentials, our curated kits include food, toys,
            grooming, and more — perfectly matched and value-packed.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-[#295840]"
          >
            Shop Now
          </Link>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Bundles"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
