const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleWares/authMiddleware");

const router = express.Router();

// @route GET /api/orders/my-orders
// @desc Get all orders of logged-in user
// @access Private
//localhost:9000/api/orders/my-orders
router.get("/my-orders", protect, async (req, res) => {
  try {
    // Check all orders in database
    const allOrders = await Order.find({});

    console.log("Total orders:", allOrders.length);

    console.log(
      "Order user IDs:",
      allOrders.map((order) => order.user.toString()),
    );

    // Get orders of logged-in user
    const orders = await Order.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    console.log("Logged-in User ID:", req.user._id.toString());
    console.log("Orders found:", orders.length);

    return res.status(200).json(orders);
  } catch (error) {
    console.error("Get my orders error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route GET /api/orders/:id
// @desc Get order details by ID
// @access Private
//localhost:9000/api/orders/:id
router.get("/:id", protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email",
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    return res.status(200).json(order);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error!",
    });
  }
});

module.exports = router;
