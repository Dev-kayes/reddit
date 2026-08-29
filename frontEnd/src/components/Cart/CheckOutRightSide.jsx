import React from "react";

const CheckOutRightSide = () => {
  const cart = {
    products: [
      {
        name: "stylish Jacket",
        size: "L",
        color: "red",
        price: 123,
        image: "http://picsum.photos/150?random=30",
      },
      {
        name: "Casual Jacket",
        size: "M",
        color: "green",
        price: 75,
        image: "http://picsum.photos/150?random=31",
      },
    ],
    totalPrice: 198,
  };
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg mb-4">Order Summary</h3>
      <div className="border-t py-4 mb-4">
        {cart.products.map((product, index) => (
          <div
            className="flex items-start justify-between py-2 border-b"
            key={index}
          >
            <div className="flex items-start">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover mr-4"
              />
              <div>
                <h3 className="text-md">{product.name}</h3>
                <p className="text-gray-500">Size : {product.size}</p>{" "}
                <p className="text-gray-500">Color : {product.color}</p>
              </div>
            </div>
            <p className="text-xl">${product.price?.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-lg mb-4">
        <p>Subtotal</p>
        <p>${cart.totalPrice?.toLocaleString()}</p>
      </div>
      <div className="flex justify-between items-center text-lg">
        <p>Shipping</p>
        <p>Free </p>
      </div>
      <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
        <p>Total Price</p>
        <p>${cart.totalPrice?.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CheckOutRightSide;
