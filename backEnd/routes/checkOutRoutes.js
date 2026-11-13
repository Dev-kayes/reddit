const express = require("express");
const CheckOut = require("../models/CheckOut");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
// const Product = require("../models/Product");
const { protect } = require("../middleWares/authMiddleware");
const router = express.Router();

//@route POST /api/checkOut
//@desc Create a new CheckOut
//@access Private
// localhost:9000/api/checkOut/
router.post("/", protect, async (req, res) => {
  console.log("Authenticated User:", req.user);
  console.log("Request Body:", req.body);
  const { checkOutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;
  if (!checkOutItems || checkOutItems.length === 0) {
    return res.status(400).json({ error: "No items in checkOut" });
  }
  try {
    const newCheckOut = await CheckOut.create({
      user: req.user._id,
      checkOutItems: checkOutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
      isPaid: false,
    });
    console.log(`CheckOut created for user: ${req.user._id}`);
    res.status(201).json(newCheckOut);
  } catch (error) {
    console.error("Checkout Error:", error.message);
    console.error("Full Error:", error);

    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});
// @route POST /api/checkOut/:id/pay
// @desc Update checkOut to mark as paid after successful payment
// @access Private
// localhost:9000/api/checkOut/:id/pay
router.put("/:id/pay", protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;
  try {
    const checkOut = await CheckOut.findById(req.params.id);
    if (!checkOut) {
      return res.status(404).json({ error: "CheckOut not found" });
    }
    if (paymentStatus === "paid") {
      checkOut.isPaid = true;
      checkOut.paymentStatus = paymentStatus;
      checkOut.paymentDetails = paymentDetails;
      checkOut.paidAt = Date.now();
      await checkOut.save();
      res.status(200).json({ message: "CheckOut is paid", checkOut });
    } else {
      res.status(400).json({ error: "CheckOut is not paid" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// @route POST /api/checkOut/:id/finalize
// @desc Finalize a checkOut & convert to an order after successful payment confirmation
// @access Private
// localhost:9000/api/checkOut/:id/finalize
router.post("/:id/finalize", protect, async (req, res) => {
  try {
    const checkOut = await CheckOut.findById(req.params.id);
    console.log("Checkout ID:", checkOut._id);
    console.log("isPaid:", checkOut.isPaid);
    console.log("isFinalized:", checkOut.isFinalized);
    console.log("Checkout Items:", checkOut.checkOutItems);
    if (!checkOut) {
      return res.status(404).json({ error: "CheckOut not found" });
    }
    if (checkOut.isPaid && !checkOut.isFinalized) {
      //create the final order based on checkOut details
      console.log("Before Order.create");

      const finalOrder = await Order.create({
        user: checkOut.user,
        orderItems: checkOut.checkOutItems,
        shippingAddress: checkOut.shippingAddress,
        paymentMethod: checkOut.paymentMethod,
        totalPrice: checkOut.totalPrice,
        isPaid: true,
        paidAt: checkOut.paidAt,
        isDelivered: false,
        paymentStatus: "paid",
      });

      console.log("Order created successfully:", finalOrder._id);

      //Mark the checkOut as finalized
      checkOut.isFinalized = true;
      checkOut.finalizedAt = Date.now();
      await checkOut.save();
      //Delete the cart associated with the user
      await Cart.findOneAndDelete({ user: checkOut.user });
      res.status(201).json({ message: "CheckOut finalized", finalOrder });
    } else if (checkOut.isFinalized) {
      res.status(400).json({ error: "CheckOut already finalized" });
    } else {
      res.status(400).json({ error: "CheckOut is not paid" });
    }
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: "Server error" });
    // }
  } catch (error) {
    console.error("Finalize error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
});
module.exports = router;
