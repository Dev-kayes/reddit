import React from "react";
import ProductGrid from "./ProductGrid";

const YouMayLike = () => {
  const similarProduct = [
    {
      _id: 1,
      name: "product-1",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=9",
          alt: "product-1",
        },
      ],
    },
    {
      _id: 2,
      name: "product-2",
      price: 110,
      images: [
        {
          url: "https://picsum.photos/200?random=10",
          alt: "product-10",
        },
      ],
    },
    {
      _id: 3,
      name: "product-3",
      price: 130,
      images: [
        {
          url: "https://picsum.photos/200?random=11",
          alt: "product-11",
        },
      ],
    },
    {
      _id: 4,
      name: "product-4",
      price: 140,
      images: [
        {
          url: "https://picsum.photos/200?random=12",
          alt: "product-12",
        },
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-4">You May Also Like</h2>
      <ProductGrid products={similarProduct} />
    </div>
  );
};

export default YouMayLike;
