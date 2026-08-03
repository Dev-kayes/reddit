import React from "react";

const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylished T-Shirt",
      price: 20,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          alt: "Stylished T-Shirt",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylished Shirt",
      price: 40,
      images: [
        {
          url: "https://picsum.photos/200?random=2",
          alt: "Stylished Shirt",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylished pant",
      price: 50,
      images: [
        {
          url: "https://picsum.photos/200?random=3",
          alt: "Stylished pant",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylished halfPant",
      price: 10,
      images: [
        {
          url: "https://picsum.photos/200?random=4",
          alt: "Stylished halfPantt",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylished Panjabi",
      price: 20,
      images: [
        {
          url: "https://picsum.photos/200?random=5",
          alt: "Stylished Panjabi",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylished katua",
      price: 20,
      images: [
        {
          url: "https://picsum.photos/200?random=6",
          alt: "Stylished katua",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylished T-Shirt",
      price: 20,
      images: [
        {
          url: "https://picsum.photos/200?random=7",
          alt: "Stylished T-Shirt",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylished glass",
      price: 20,
      images: [
        {
          url: "https://picsum.photos/200?random=8",
          alt: "Stylished glass",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-2xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles and trends in our collection
        </p>
      </div>
    </section>
  );
};

export default NewArrivals;
