import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    petSize: "",
    ageGroup: "",
    brand: [],
    minPrice: 0,
    maxPrice: 4000,
  });

  const [priceRange, setPriceRange] = useState([0, 4000]);

  const petSizes = ["Small Dogs", "Medium Dogs", "Large Dogs"];
  const ageGroups = ["Puppy", "Adult", "Senior"];

  const brands = [
    "BarkBites",
    "Pedigree",
    "Royal Canin",
    "Drools",
    "PurePet",
    "Himalaya",
  ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      petSize: params.petSize || "",
      ageGroup: params.ageGroup || "",
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 10000,
    });

    setPriceRange([
      Number(params.minPrice) || 0,
      Number(params.maxPrice) || 10000,
    ]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.set(key, newFilters[key].join(","));
      } else if (newFilters[key] && key !== "minPrice") {
        params.set(key, newFilters[key]);
      }
    });

    navigate(`?${params.toString()}`);
  };

  // Price range
  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: maxPrice };
    setFilters(filters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-lg font-semibold">Filters</h2>

      {/* Pet Size */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Pet Size</label>
        {petSizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="radio"
              name="petSize"
              value={size}
              checked={filters.petSize === size}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-[#295840] focus:ring-[#295840]"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Age Group */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">
          Age Group
        </label>
        {ageGroups.map((age) => (
          <div key={age} className="flex items-center mb-1">
            <input
              type="radio"
              name="ageGroup"
              value={age}
              checked={filters.ageGroup === age}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-[#295840] focus:ring-[#295840]"
            />
            <span className="text-gray-700">{age}</span>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-[#295840] focus:ring-[#295840]"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>

        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-[#295840]"
        />

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>₹0</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
