const express = require("express");
const { protect, admin } = require("../middleWares/authMiddleware");
const Order = require("../models/Order");
const route = express.Router();

// @route GET /api/admin/orders
// @desc Get all Orders (Admin only)
// @access private/Admin
// localhost:9000/api/order/admin
route.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    return res.json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});

module.exports = route;
