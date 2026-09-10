import React from "react";
import { Link } from "react-router";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 1234,
      user: {
        name: "Fish",
      },
      status: "Panding...",
      totalPrice: 120,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl font-black">$1000</p>
        </div>
        <div className=" p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl font-black">100</p>
          <Link
            to={"/admin/orders"}
            className="hover:underline text-blue-500 hover:text-blue-700"
          >
            Manage Orders here
          </Link>
        </div>
        <div className=" p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl font-black">200</p>
          <Link
            to={"/admin/products"}
            className="hover:underline text-blue-500 hover:text-blue-700"
          >
            Manage Products here
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-bold mt-6">Table of Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-300 uppercase rounded-lg ">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">User</th>
                <th className="p-3">Total price</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="text-xs border-b cursor-pointer"
                  >
                    <td className="p-2">{order._id}</td>
                    <td className="p-2">{order.user.name}</td>
                    <td className="p-2">{order.totalPrice}</td>
                    <td className="p-2">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No Order Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
