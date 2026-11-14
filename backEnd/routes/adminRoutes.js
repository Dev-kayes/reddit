const express = require("express");
const User = require("../models/User");
const { admin, protect } = require("../middleWares/authMiddleware");

const route = express.Router();

// @route GET /api/admin/users
// @desc get all users (Admin only)
// @access Private/Admin
// localhost:9000/api/admin/users/
route.get("/", protect, admin, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});

module.exports = route;
