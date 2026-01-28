import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const ToysAndFun = () => {
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
          name: "KONG Classic Rubber Chew Toy",
          price: 799,
          images: "https://picsum.photos/500/500?random=71",
        },
        {
          _id: 2,
          name: "BarkBites Rope Tug Toy",
          price: 349,
          images: "https://picsum.photos/500/500?random=72",
        },
        {
          _id: 3,
          name: "Chuckit! Fetch Ball",
          price: 499,
          images: "https://picsum.photos/500/500?random=73",
        },
        {
          _id: 4,
          name: "Trixie Interactive Puzzle Toy",
          price: 999,
          images: "https://picsum.photos/500/500?random=74",
        },
        {
          _id: 5,
          name: "Petmate Squeaky Plush Toy",
          price: 399,
          images: "https://picsum.photos/500/500?random=75",
        },
        {
          _id: 6,
          name: "Outward Hound Hide & Seek Toy",
          price: 899,
          images: "https://picsum.photos/500/500?random=76",
        },
        {
          _id: 7,
          name: "BarkBites Dental Chew Toy",
          price: 449,
          images: "https://picsum.photos/500/500?random=77",
        },
        {
          _id: 8,
          name: "KONG Flyer Frisbee",
          price: 599,
          images: "https://picsum.photos/500/500?random=78",
        },
        {
          _id: 9,
          name: "PetSafe Treat Dispensing Ball",
          price: 699,
          images: "https://picsum.photos/500/500?random=79",
        },
        {
          _id: 10,
          name: "Trixie Rope Knot Toy",
          price: 299,
          images: "https://picsum.photos/500/500?random=80",
        },
        {
          _id: 11,
          name: "Chuckit! Ultra Ball",
          price: 549,
          images: "https://picsum.photos/500/500?random=81",
        },
        {
          _id: 12,
          name: "BarkBites Plush Squeaker Set",
          price: 649,
          images: "https://picsum.photos/500/500?random=82",
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
          Toys & Fun
        </h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ToysAndFun;
