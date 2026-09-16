const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleWares/authMiddleware");
const router = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      materials,
      gender,
      images,
      isFeatured,
      isPublished,
      dimensions,
      weight,
      tags,
      sku,
    } = req.body;
    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      materials,
      gender,
      images,
      isFeatured,
      isPublished,
      dimensions,
      weight,
      tags,
      sku,
      user: req.user._id, // Get the user ID from the request object
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
