const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleWares/authMiddleware");
const route = express.Router();

// @route GET /api/admin/products
// @desc Get all products (Admin only)
// @access private/Admin
// localhost:9000/api/product/admin
route.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});

module.exports = route;
