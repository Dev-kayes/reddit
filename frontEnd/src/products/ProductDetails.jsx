import React from "react";
// dummy API:
const selectedProduct = {
  name: "Stylish Jacket",
  price: 150,
  originalPrice: 120,
  description: "This is a Stylish Jacket",
  branch: "Puma",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/200?random=9",
      alt: "Stylished T-Shirt",
    },
    {
      url: "https://picsum.photos/200?random=11",
      alt: "Stylished T-Shirt",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg border">
        <div className="flex flex-col md:flex-row space-y-4 mr-6"></div>
        {/* Left Thumbnails */}
      </div>
    </div>
  );
};

export default ProductDetails;
