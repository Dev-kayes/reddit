import React, { useEffect } from "react";
import { useParams } from "react-router";

const OrderDetailsPage = () => {
  const { id } = useParams();
  let [orderDetails, setOrderDetails] = React.useState(null);
  useEffect(() => {
    const mockOrderDetails = {
      _id: 12345,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: true,
      paymentMethod: "Cash on Delivery",
      shippingMethod: "Home Delivery",
      shippingAddress: { city: "New York", country: "USA", zip: "12345" },
      orderItems: [
        {
          productId: "1",
          name: "product-1",
          price: 100,
          quantity: 2,
          image: "https://picsum.photos/200?random=9",
        },
        {
          productId: "2",
          name: "product-2",
          price: 120,
          quantity: 3,
          image: "https://picsum.photos/200?random=200",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
    </div>
  );
};

export default OrderDetailsPage;
