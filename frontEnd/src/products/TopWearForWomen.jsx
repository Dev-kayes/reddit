import React from "react";
import ProductGrid from "./ProductGrid";

const TopWearForWomen = () => {
  const productHolderProducts = [
    {
      _id: 1,
      name: "product-1",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/200?random=13",
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
          url: "https://picsum.photos/200?random=14",
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
          url: "https://picsum.photos/200?random=15",
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
          url: "https://picsum.photos/200?random=16",
          alt: "product-12",
        },
      ],
    },
    {
      _id: 5,
      name: "product-5",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/200?random=17",
          alt: "product-13",
        },
      ],
    },
    {
      _id: 6,
      name: "product-6",
      price: 160,
      images: [
        {
          url: "https://picsum.photos/200?random=18",
          alt: "product-14",
        },
      ],
    },
    {
      _id: 7,
      name: "product-7",
      price: 170,
      images: [
        {
          url: "https://picsum.photos/200?random=19",
          alt: "product-15",
        },
      ],
    },
    {
      _id: 8,
      name: "product-8",
      price: 180,
      images: [
        {
          url: "https://picsum.photos/200?random=20",
          alt: "product-16",
        },
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-4">
        Top Wear For Women
      </h2>
      <ProductGrid products={productHolderProducts} />
    </div>
  );
};

export default TopWearForWomen;
