import React from "react";
import { useSearchParams } from "react-router";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = React.useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Gray",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Denim", "Leather", "Silk"];
  const brands = ["Puma", "Adidas", "Nike", "Under Armour", "Reebok"];
  const gender = ["Men", "Women"];
  React.useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.categories || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([params.minPrice || 0, params.maxPrice || 100]);
  }, [searchParams]);
  const handleFilterChange = (e) => {
    let { name, value, checked, type } = e.target;
    const newFilter = { ...filter };
    if (type === "checkbox") {
      if (checked) {
        newFilter[name] = [...(newFilter[name] || []), value];
      } else {
        newFilter[name] = newFilter[name].filter((item) => item !== value);
      }
    } else {
      newFilter[name] = value;
    }
    setFilter(newFilter);
    console.log(newFilter);
  };
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div className="flex items-center mb-1" key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {gender.map((gender) => (
          <div className="flex items-center mb-1" key={gender}>
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>
      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 focus:ring-2 focus:ring-offset-1 focus:ring-black"
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>
      {/* Size filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>
      {/* Material Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((materials) => (
          <div key={materials} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={materials}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{materials}</span>
          </div>
        ))}
      </div>
      {/* Brand Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brands) => (
          <div key={brands} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={brands}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brands}</span>
          </div>
        ))}
      </div>
      {/* Price Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer appearance-none"
          max={100}
          min={0}
          defaultValue={60}
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
