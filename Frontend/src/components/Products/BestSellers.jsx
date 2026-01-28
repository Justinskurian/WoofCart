import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiShoppingCart } from "react-icons/fi";
import collarCute from "../../assets/Collar-Cute.webp";
import chewToy from "../../assets/Chew_Toy.webp";
import dogFood from "../../assets/Dog_Food.webp";
import dogMedicine from "../../assets/Dog_Medicine.webp";
import collarBlack from "../../assets/Collar_Black.webp";


const BestSellers = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  const items = [
    {
      image: collarCute,
      title: "Premium Dog Collar",
      subtitle: "Comfort fit • Durable",
      price: "₹799",
    },
    {
      image: chewToy,
      title: "Colourful Chew Toy",
      subtitle: "Non-toxic • Long-lasting",
      price: "₹499",
    },
    {
      image: dogFood,
      title: "Natural Balance Dog Food",
      subtitle:"Organic Chicken and Veggies" ,
      price: "₹1099",
    },
    {
      image: dogMedicine,
      title: "Paw Heal Serum",
      subtitle: "Natural Remedy",
      price: "₹849",
    },
    {
      image: collarBlack,
      title: "Luxury Dog Belt",
      subtitle: "Ultra soft • Durable",
      price: "₹2,499",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-14 px-20 relative">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Recommended Products
        </h2>
        <p className="text-gray-500 mt-2">
          Loved by pets, trusted by owners
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition"
      >
        <FiChevronRight size={22} />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="group min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-[280px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {item.subtitle}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-green-600">
                  {item.price}
                </span>
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-[#295840] transition">
                  <FiShoppingCart />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
