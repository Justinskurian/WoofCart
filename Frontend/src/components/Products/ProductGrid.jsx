import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="group"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            {/* Image */}
            <div className="relative z-10 p-4">
              <div className="w-full h-72 flex items-center justify-center">
                <img
                  src={product.images}
                  alt={product.images?.altText || product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#285A40]">
                  ₹ {product.price}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
