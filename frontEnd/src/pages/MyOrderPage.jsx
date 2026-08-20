import React from "react";

const MyOrderPage = () => {
  const [order, setOrder] = React.useState("");
  React.useEffect(() => {
    setTimeout(() => {
      // Dummy Order API's:
      const mockOrder = () => [
        {
          _id: 12345,
          createdAt: new Date(),
          shippingAddredd: { city: "New York", country: "USA", zip: "12345" },
          orderItems: [
            {
              name: "product-1",
              image: "https://picsum.photos/200?random=9",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: 678910,
          createdAt: new Date(),
          shippingAddredd: {
            city: "Dhaka",
            country: "BanglaDesh",
            zip: "56789",
          },
          orderItems: [
            {
              name: "product-2",
              image: "https://picsum.photos/200?random=21",
            },
          ],
          totalPrice: 120,
          isPaid: true,
        },
      ];
      setOrder(mockOrder());
    }, 1000);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Order</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 ? (
              order.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-violet-50 cursor-pointer"
                >
                  <td className="p-2 sm:p-4">
                    <img
                      src={order?.orderItems[0]?.image}
                      alt={order.orderItems[0].name}
                      className="w-full h-10 sm:w-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-2 sm:py-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-2 sm:px-4">
                    {new Date(order.createdAt).toDateString()}
                    {""}
                    {new Date(order.createdAt).toTimeString()}
                  </td>
                  <td className="p-2 sm:px-4">
                    {order.shippingAddredd
                      ? `${order.shippingAddredd.city}, ${order.shippingAddredd.country}`
                      : null}
                  </td>
                  <td className="p-2 sm:p-4">{order.orderItems.length}</td>
                  <td className="p-2 sm:p-4">{order.totalPrice}</td>
                  <td>
                    <span
                      className={`p-2 sm:p-4 hover:font-bold
                    
                    ${
                      order.isPaid
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                    `}
                    >
                      {order.isPaid ? "Paid" : "Panding..."}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <td
                colSpan={7}
                className="py-2 px-4 sm:py-3 text-center font-bold text-4xl sm:text-3xl text-gray-500"
              >
                No Cart Added
              </td>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
