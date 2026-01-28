import React from "react";
import Hero from "../components/Layout/Hero";
import Collections from "../components/Products/Collections";
import BestSellers from "../components/Products/BestSellers";
import ProductGrid from "../components/Products/ProductGrid";
import ProductDetails from "../components/Products/Productdetails";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import collarBlack from "../assets/Collar_Black.webp";
import dogBed from "../assets/Dog_Bed.webp";
import dogBrush from "../assets/Dog_Brush.webp";
import dogFood from "../assets/Dog_Foodbowl.webp";

const placeholderProducts = [
  {
    _id: 5,
    name: "Luxury Black Collar",
    price: 2499,
    images: collarBlack,
  },
  {
    _id: 6,
    name: "Medium size Dog Bed",
    price: 4599,
    images: dogBed,
  },
  {
    _id: 7,
    name: "Silky Coat Grooming Brush",
    price: 599,
    images: dogBrush,
  },
  {
    _id: 8,
    name: "Standard Food Bowl",
    price: 799,
    images: dogFood,
  },
];
const Home = () => {
  return (
    <div>
      <Hero />
      <Collections />
      <BestSellers />

      {/* Hot Products */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Essential Products
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection/>
      <FeaturesSection/>
    </div>
  );
};

export default Home;
