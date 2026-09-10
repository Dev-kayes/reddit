import React from "react";

const UserManagement = () => {
  const users = [
    { _id: 123456, name: "example", email: "example@gmail.com", role: "admin" },
  ];
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };
  const handleRoleChange = (userId, newRole) => {
    console.log({ userId: userId, newRole: newRole });
  };
  const handleUserDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log({ userId: userId });
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text2xl font-bold mb-6">Managing Users</div>
      {/* Add User */}
      <div className="p-6 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-4">Add User</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-500">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500">Emali</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition duration-500 cursor-pointer hover:scale-105"
        >
          Add New User
        </button>
      </form>
      <div className="overflow-x-auto shadow-lg m-10 max-w-7xl">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-yellow-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-red-50">
                <td className="p-2 font-bold">{user.name}</td>
                <td className="p-2 font-bold">{user.email}</td>
                <td className="p-2 font-bold">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="p-2 border rounded "
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-2 font-bold">
                  <button
                    className="bg-red-500 text-red-900 p-3 hover:text-red-700 rounded"
                    onClick={() => handleUserDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
