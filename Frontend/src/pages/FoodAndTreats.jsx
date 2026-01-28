import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const FoodAndTreats = () => {
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
          name: "BarkBites Chicken & Rice Dry Food (3kg)",
          price: 899,
          images: "https://picsum.photos/500/500?random=31",
        },
        {
          _id: 2,
          name: "Royal Canin Adult Dog Food",
          price: 1299,
          images: "https://picsum.photos/500/500?random=32",
        },
        {
          _id: 3,
          name: "Pedigree Puppy Chicken & Milk",
          price: 749,
          images: "https://picsum.photos/500/500?random=33",
        },
        {
          _id: 4,
          name: "Drools Focus Super Premium Food",
          price: 999,
          images: "https://picsum.photos/500/500?random=34",
        },
        {
          _id: 5,
          name: "PurePet Lamb & Veg Adult Food",
          price: 699,
          images: "https://picsum.photos/500/500?random=35",
        },
        {
          _id: 6,
          name: "Himalaya Healthy Treats – Chicken",
          price: 299,
          images: "https://picsum.photos/500/500?random=36",
        },
        {
          _id: 7,
          name: "BarkBites Dental Chew Sticks",
          price: 349,
          images: "https://picsum.photos/500/500?random=37",
        },
        {
          _id: 8,
          name: "Pedigree Biscrok Biscuits",
          price: 199,
          images: "https://picsum.photos/500/500?random=38",
        },
        {
          _id: 9,
          name: "Royal Canin Maxi Adult Food",
          price: 1599,
          images: "https://picsum.photos/500/500?random=39",
        },
        {
          _id: 10,
          name: "Drools Chicken & Egg Adult Food",
          price: 899,
          images: "https://picsum.photos/500/500?random=40",
        },
        {
          _id: 11,
          name: "BarkBites Grain-Free Treat Mix",
          price: 399,
          images: "https://picsum.photos/500/500?random=41",
        },
        {
          _id: 12,
          name: "PurePet Puppy Starter Food",
          price: 649,
          images: "https://picsum.photos/500/500?random=42",
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
          Food & Treats
        </h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default FoodAndTreats;
