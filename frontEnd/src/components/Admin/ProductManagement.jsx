import React from "react";
import { Link } from "react-router";

const ProductManagement = () => {
  const product = [
    {
      _id: 1112323,
      name: "product-1",
      price: 100,
      sku: "1112323",
    },
  ];
  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log({ productId: productId });
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <div className="overflow-x-auto text-left text-gray-500">
        <table className="min-w-full sm:rounded-lg shadow-lg">
          <thead className="bg-yellow-50 text-xs uppercase">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Sku</th>
              <th className="p-3">action</th>
            </tr>
          </thead>
          <tbody>
            {product.length > 0 ? (
              product.map((product, index) => (
                <tr
                  key={index}
                  className="border-b hover:text-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-500">
                    {product.name}
                  </td>

                  <td className="p-4 font-medium text-gray-500">
                    ${product.price}
                  </td>

                  <td className="p-4 font-medium text-gray-500">
                    {product.sku}
                  </td>

                  <td className="p-4 font-medium text-gray-500">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-yellow-400 p-2 rounded-lg mr-2 hover:bg-amber-500 text-white"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="bg-red-400 p-2 rounded-lg hover:bg-red-700 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
