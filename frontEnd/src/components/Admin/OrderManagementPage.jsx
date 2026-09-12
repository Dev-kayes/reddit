import React from "react";

const OrderManagementPage = () => {
  const orders = [
    {
      _id: 1234,
      user: {
        name: "Fish",
      },
      totalPrice: 120,
      status: "Processing...",
    },
  ];
  const handleStatusChange = (orderId, newStatus) => {
    console.log({ orderId, newStatus });
  };
  return (
    <div className="max-w-7xl mx-auto p-7">
      <h2 className="text-3xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="text-left min-w-full text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Total Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray-500 cursor-pointer"
                >
                  <td className="p-2 font-semibold text-black whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-2">{order.user.name}</td>
                  <td className="p-2">{order.totalPrice}</td>
                  <td className="p-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="border rounded-lg focus:outline-none focus:ring-indigo-100 focus:bg-indigo-100 block p-2.5 bg-gray-500 border-gray-300"
                    >
                      <option value="Processing">Processing...</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-black transition-colors duration-300"
                      onClick={handleStatusChange(order._id, "Delivered")}
                    >
                      Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                {" "}
                <td colSpan={5} className="p-3 text-center">
                  No order found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagementPage;
