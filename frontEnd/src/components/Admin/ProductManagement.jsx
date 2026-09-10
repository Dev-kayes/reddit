import React from "react";

const ProductManagement = () => {
  const product = [
    {
      _id: 1112323,
      name: "product-1",
      price: 100,
      sku: "1112323",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <div className="overflow-x-auto text-left text-fuchsia-500">
        <table className="min-w-full sm:rounded-lg shadow-lg">
          <thead className="bg-yellow-50 text-xs uppercase">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Sku</th>
              <th className="p-3">action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
