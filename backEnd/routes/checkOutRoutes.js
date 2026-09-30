const express = require("express");
const CheckOut = require("../models/CheckOut");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");
const { protect } = require("../middleWares/authMiddleware");
const router = express.Router();

//@route POST /api/checkOut
//desc Create a new CheckOut
//access Private
router.post("/", protect, async (req, res) => {
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
    console.log(`checkOut created for user: ${req.user._id}`);
    res.status(201).json(newCheckOut);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
//@route POST /api/checkOut/:checkOutId/pay
//desc Update checkOut to mark as paid after successful payment
//access Private
router.put("/:id/pay", protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;
  try {
    const checkOut = await checkOut.findById(req.params.id);
    if (!checkOut) {
      res.status(404).json({ error: "CheckOut not found" });
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
  } catch (error) {}
});

//@route POST /api/checkOut/:checkOutId/finalize
//desc Finalize a checkOut after successful payment confirmation
//access Private
router.post("/:id/finalize", protect, async (req, res) => {
  try {
    const checkOut = await checkOut.findById(req.params.id);
    if (!checkOut) {
      res.status(404).json({ error: "CheckOut not found" });
    }
    if (checkOut.isPaid && checkOut.isFinalized === false) {
      //create the final order based on checkOut details
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
        paymentDetails: checkOut.paymentDetails,
      });
      checkout.isFinalized = true;
      checkout.finalizedAt = Date.now();
      await checkout.save();
      //Delete the cart associated with the user
      await Cart.findOneAndDelete({ user: checkOut.user });
      res.status(200).json({ message: "CheckOut finalized", finalOrder });
    } else if (checkOut.isFinalized) {
      res.status(400).json({ error: "CheckOut is already finalized" });
    } else {
      res.status(400).json({ error: "CheckOut is not paid" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
