import React from "react";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = React.useSearchParams();
  const [filter, setFilter] = useState({
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
  return <div>FilterSidebar</div>;
};

export default FilterSidebar;
