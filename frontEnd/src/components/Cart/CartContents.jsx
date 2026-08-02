import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 20,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Pant",
      size: "L",
      color: "Blue",
      quantity: 2,
      price: 60,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b py-4"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3> {product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer">
                  -
                </button>
                <span className="border rounded px-2 py-1 text-xl font-medium mx-0.5">
                  {product.quantity}
                </span>
                <button className="border rounded px-2 py-1 text-xl font-medium cursor-pointer">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price}</p>
            <button>
              <MdDeleteOutline className="h-6 w-6 text-red-500 mt-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
