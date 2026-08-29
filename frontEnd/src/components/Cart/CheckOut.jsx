import React from "react";
import CheckOutLeftSide from "./CheckOutLeftSide";
import CheckOutRightSide from "./CheckOutRightSide";
const CheckOut = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-10 px-6 max-w-7xl gap-8 mx-auto tracking-tighter">
      {/* Left side */}
      <CheckOutLeftSide />
      {/* Right side */}
      <CheckOutRightSide />
    </div>
  );
};

export default CheckOut;
