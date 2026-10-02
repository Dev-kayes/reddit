const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleWares/authMiddleware");
const router = express.Router();

// @route GET /api/orders/my-orders
// @desc Create a new order for a logged in user
// @access Private
router.get("/my-orders", protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(201).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// @route GET /api/orders/:id
// @desc Get order details by ID
// @access Private
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email",
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error!");
  }
});
module.exports = router;
