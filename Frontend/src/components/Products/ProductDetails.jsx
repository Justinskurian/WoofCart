import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

import dogHouse from "../../assets/Dog_House_Outside.webp";
import dogRaincoat from "../../assets/Dog_Raincoat.webp";
import leatherBelt from "../../assets/Leather_belt.webp";
import ballSet from "../../assets/Ball_Set.webp";

import BarkBites from "../../assets/BarkBites1.webp";
import BarkBites2 from "../../assets/BarkBites2.webp";
import BarkBitesChicken from "../../assets/BarkBites_Chicken.webp";
import BarkBitesLamb from "../../assets/BarkBites_Lamb.webp";
import BarkBitesFish from "../../assets/BarkBites_Fish.webp";
import BarkBitesBeef from "../../assets/BarkBites_Beef.webp";

const selectedProduct = {
  name: "BarkBites Supreme Nutrition",
  description:
    "High-protein, grain-free dog food with real chicken, superfoods, and essential nutrients for skin, digestion, and joint health.",
  brand: "BarkBites",

  flavours: [
    "Chicken & Brown Rice",
    "Lamb & Sweet Potato",
    "Fish & Pumpkin",
    "Beef & Barley",
  ],

  // ✅ size-based pricing (ONLY addition)
  sizePricing: {
    "1kg": { price: 299, originalPrice: 349 },
    "3kg": { price: 849, originalPrice: 999 },
    "7kg": { price: 1899, originalPrice: 2199 },
    "10kg": { price: 2599, originalPrice: 2999 },
  },

  images: [
    { url: BarkBites, alText: "Barkbites Supreme Nutrition 1" },
    { url: BarkBites2, alText: "Barkbites Supreme Nutrition 2" },
  ],

  flavourImg: [
    { url: BarkBitesChicken, alText: "Chicken & Brown Rice" },
    { url: BarkBitesLamb, alText: "Lamb & Sweet Potato" },
    { url: BarkBitesFish, alText: "Fish & Pumpkin" },
    { url: BarkBitesBeef, alText: "Beef & Barley" },
  ],
};

const similarProducts = [
  { _id: 1, name: "Outdoor DogHouse (Large)", price: 17999, images: dogHouse },
  {
    _id: 2,
    name: "Tropica Raincoat (Small)",
    price: 1999,
    images: dogRaincoat,
  },
  {
    _id: 3,
    name: "Veronica Premium Leather leash",
    price: 3499,
    images: leatherBelt,
  },
  { _id: 4, name: "PlayHere Ballset for Dogs", price: 599, images: ballSet },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("1kg"); // ✅ default 1kg
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleFlavourSelect = (flavour) => {
    setSelectedFlavour(flavour);

    const matchedImage = selectedProduct.flavourImg.find(
      (item) => item.alText === flavour,
    );

    if (matchedImage) {
      setMainImage(matchedImage.url);
    }
  };

  const handleAddToCart = () => {
    if (!selectedFlavour || !selectedSize) {
      toast.error("Please select a size and flavour before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product Added to Cart", { duration: 1000 });
      setIsButtonDisabled(false);
    }, 500);
  };

  const { price, originalPrice } = selectedProduct.sizePricing[selectedSize];

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alText}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-2 border-[#295840]"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
          </div>

          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alText}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-[#295840]"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Right Details */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            {/* ✅ dynamic price */}
            <p className="text-gray-500 line-through">₹{originalPrice}</p>
            <p className="text-xl text-gray-800 mb-4">₹{price}</p>

            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Flavours */}
            <div className="mb-4">
              <p className="text-gray-700">Flavours</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProduct.flavours.map((flavour) => (
                  <button
                    key={flavour}
                    onClick={() => handleFlavourSelect(flavour)}
                    className={`p-3 rounded border text-sm ${
                      selectedFlavour === flavour
                        ? "bg-[#295840] text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {flavour}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <p className="text-gray-700">Size</p>
              <div className="flex gap-2 mt-2">
                {Object.keys(selectedProduct.sizePricing).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "bg-[#295840] text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`w-full py-2 px-6 rounded text-white ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-[#295840]"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
