import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const HealthAndSupplements = () => {
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
          name: "BarkBites Joint Care Supplement",
          price: 899,
          images: "https://picsum.photos/500/500?random=11",
        },
        {
          _id: 2,
          name: "Himalaya Healthy Skin & Coat",
          price: 749,
          images: "https://picsum.photos/500/500?random=12",
        },
        {
          _id: 3,
          name: "Royal Canin Digestive Support",
          price: 1299,
          images: "https://picsum.photos/500/500?random=13",
        },
        {
          _id: 4,
          name: "Drools Calcium Bone Supplement",
          price: 599,
          images: "https://picsum.photos/500/500?random=14",
        },
        {
          _id: 5,
          name: "PurePet Multivitamin Syrup",
          price: 499,
          images: "https://picsum.photos/500/500?random=15",
        },
        {
          _id: 6,
          name: "BarkBites Probiotic Chews",
          price: 699,
          images: "https://picsum.photos/500/500?random=16",
        },
        {
          _id: 7,
          name: "Himalaya Immunity Booster",
          price: 849,
          images: "https://picsum.photos/500/500?random=17",
        },
        {
          _id: 8,
          name: "Royal Canin Omega 3 Capsules",
          price: 1099,
          images: "https://picsum.photos/500/500?random=18",
        },
        {
          _id: 9,
          name: "Drools Joint Support Tablets",
          price: 899,
          images: "https://picsum.photos/500/500?random=19",
        },
        {
          _id: 10,
          name: "PurePet Puppy Growth Formula",
          price: 649,
          images: "https://picsum.photos/500/500?random=20",
        },
        {
          _id: 11,
          name: "BarkBites Dental Care Chews",
          price: 549,
          images: "https://picsum.photos/500/500?random=21",
        },
        {
          _id: 12,
          name: "Himalaya Senior Dog Support",
          price: 899,
          images: "https://picsum.photos/500/500?random=22",
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
          Health & Supplements
        </h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default HealthAndSupplements;
