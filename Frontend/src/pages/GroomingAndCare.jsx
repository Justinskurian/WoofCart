import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const GroomingAndCare = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Himalaya Herbal Dog Shampoo",
          price: 349,
          images: "https://picsum.photos/500/500?random=51",
        },
        {
          _id: 2,
          name: "BarkBites Anti-Tick Spray",
          price: 499,
          images: "https://picsum.photos/500/500?random=52",
        },
        {
          _id: 3,
          name: "Wahl Dog Grooming Brush",
          price: 699,
          images: "https://picsum.photos/500/500?random=53",
        },
        {
          _id: 4,
          name: "Pet Head Oatmeal Shampoo",
          price: 599,
          images: "https://picsum.photos/500/500?random=54",
        },
        {
          _id: 5,
          name: "Captain Zack Paw Balm",
          price: 449,
          images: "https://picsum.photos/500/500?random=55",
        },
        {
          _id: 6,
          name: "Drools Deodorizing Spray",
          price: 299,
          images: "https://picsum.photos/500/500?random=56",
        },
        {
          _id: 7,
          name: "Petmate Nail Clipper",
          price: 399,
          images: "https://picsum.photos/500/500?random=57",
        },
        {
          _id: 8,
          name: "Earthbath Hypoallergenic Shampoo",
          price: 749,
          images: "https://picsum.photos/500/500?random=58",
        },
        {
          _id: 9,
          name: "BarkBites Fur Detangling Spray",
          price: 349,
          images: "https://picsum.photos/500/500?random=59",
        },
        {
          _id: 10,
          name: "Trixie Dog Ear Cleaner",
          price: 299,
          images: "https://picsum.photos/500/500?random=60",
        },
        {
          _id: 11,
          name: "PetSafe Shedding Comb",
          price: 649,
          images: "https://picsum.photos/500/500?random=61",
        },
        {
          _id: 12,
          name: "Captain Zack Tick & Flea Shampoo",
          price: 499,
          images: "https://picsum.photos/500/500?random=62",
        },
      ];

      setProducts(fetchedProducts);
    }, 800);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
        Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      {/* Products Section */}
      <div className="flex-grow p-6">
        <h2 className="text-2xl font-semibold uppercase mb-4">
          Grooming & Care
        </h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default GroomingAndCare;
