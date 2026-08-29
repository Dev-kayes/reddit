import React from "react";

const CheckOutLeftSide = () => {
  const [shippingAddress, setShippingAddress] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const [checkOutId, setCheckOutId] = React.useState(null);
  const handleCheckOut = (e) => {
    e.preventDefault();
    setCheckOutId(123);
  };
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl uppercase mb-6">checkOut</h2>
      <form onSubmit={handleCheckOut}>
        <h3 className="text-lg mb-4">Contact Details</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded "
            value="youremail@gmail.com"
            disabled
          />
        </div>
        <h3 className="text-lg mb-4">Delivery</h3>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className=" block text-gray-700">First Name</label>
            <input
              type="text"
              value={shippingAddress.firstName}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  firstName: e.target.value,
                })
              }
              className="w-full p-2 border  rounded "
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={shippingAddress.lastName}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  lastName: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={shippingAddress.address}
            className="w-full border rounded"
            required
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                address: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className=" block text-gray-700">City</label>
            <input
              type="text"
              value={shippingAddress.city}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  city: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Postal Code</label>
            <input
              type="text"
              value={shippingAddress.postalCode}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  postalCode: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            value={shippingAddress.country}
            className="w-full border rounded"
            required
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                country: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            value={shippingAddress.phone}
            className="w-full border rounded"
            required
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                phone: e.target.value,
              })
            }
          />
        </div>
        {!checkOutId ? (
          <button className="w-full rounded-lg bg-black text-white tracking-tighter p-2 cursor-pointer">
            CheckOut
          </button>
        ) : (
          <p className=" text-gray-500">Pay with SSL</p>
        )}
      </form>
    </div>
  );
};

export default CheckOutLeftSide;
