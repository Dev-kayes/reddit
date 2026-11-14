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

// @route PUT /api/admin/orders/:id
// @desc Update order status (Admin only)
// @access private/Admin
// localhost:9000/api/order/admin/:id
route.put("/:id", protect, admin, async (req, res) => {
  try {
    const orders = await Order.findById(req.params.id);
    if (orders) {
      orders.status = req.body.status || orders.status;
      orders.isDelivered =
        req.body.status === "Delivered" ? true : orders.isDelivered;
      orders.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : orders.deliveredAt;
      const updatedOrders = await orders.save();
      res.json(updatedOrders);
    } else {
      return res.status(404).json("Order not found");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});

// @route PUT /api/admin/orders/:id
// @desc Delete an Order (Admin only)
// @access private/Admin
// localhost:9000/api/order/admin/:id
route.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      await order.deleteOne();
      return res.status(200).json({ success: true, message: "Order Removed" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});

module.exports = route;
