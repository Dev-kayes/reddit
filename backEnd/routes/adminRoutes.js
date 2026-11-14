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

// @route POST /api/admin/users
// @desc add a new user (Admin only)
// @access Private/Admin
// localhost:9000/api/admin/users/
route.post("/", protect, admin, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) res.status(400).send({ message: "User Already exists" });
    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });
    await user.save();
    return res
      .status(201)
      .send({ success: true, message: "User created successsfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});

// @route PUT /api/admin/users/:id
// @desc Update user info (Admin only) - name , email, role
// @access Private/Admin
// localhost:9000/api/admin/users/
route.put("/:id", protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
    }
    const updateUser = await user.save();
    return res.status(201).json({
      success: true,
      message: "User Updated Successfully",
      user: updateUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server error");
  }
});
// @route PUT /api/admin/users/:id
// @desc Update user info (Admin only) - name , email, role
// @access Private/Admin
// localhost:9000/api/admin/users/:id
route.delete("/:id", protect, admin, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await User.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "User Delete successfully" });
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = route;
