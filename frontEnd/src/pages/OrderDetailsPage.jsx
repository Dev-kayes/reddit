import React from "react";

const checkOut = {
  _id: "1234567",
  createdAt: new Date(),
  checkOutItems: [
    {
      productID: "1",
      name: "Jacked",
      color: "red",
      size: "L",
      quantity: 2,
      price: 120,
      image: "https://picsum.photos/200?random=69",
    },
    {
      productID: "2",
      name: "Pajama",
      color: "Yellow",
      size: "xs",
      quantity: 3,
      price: 150,
      image: "https://picsum.photos/200?random=66",
    },
  ],
  ShippingAddress: {
    address: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
const OrderDetailsPage = () => {
  return (
    <div className="max-w-4xl items-center mx-auto p-6 bg-white">
      <div className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You For Your Order...
      </div>
      {checkOut && (
        <div className="p-6  rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order Summary */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID : {checkOut._id}
              </h2>
              <p className="text-gray-600">
                Order Date : {new Date(checkOut.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="text-emerald-500 text-sm">Estimated Deivery: </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
