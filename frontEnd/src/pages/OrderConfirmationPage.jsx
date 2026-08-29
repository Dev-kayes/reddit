import React from "react";

const OrderConfirmationPage = () => {
  const checkOut = {
    _id: "1232323",
    createdAt: new Date(),
    checkOutItems: [
      {
        productId: "1",
        name: "Jacked",
        color: "red",
        size: "L",
        quantity: 2,
        price: 120,
        image: "https://picsum.photos/200?random=33",
      },
      {
        productId: "2",
        name: "Shirt",
        color: "black",
        size: "S",
        quantity: 3,
        price: 140,
        image: "https://picsum.photos/200?random=34",
      },
    ],
  };
  const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 7);
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you For your Order
      </h1>
      {checkOut && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order id and date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkOut._id}
              </h2>
              <p className=" text-gray-500">
                Order date:{checkOut.createdAt.toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div className="text-emerald-500 text-sm">
              Estimated Delivery:
              {calculatedEstimatedDelivery(checkOut.createdAt)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
