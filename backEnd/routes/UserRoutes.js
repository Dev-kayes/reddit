const express = require("express");
const User = require("../models/User");
var jwt = require("jsonwebtoken");

const router = express.Router();

// @route POST /api/user/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User Already Exists" });
    user = new User({ name, email, password });
    await user.save();
    const payload = { user: { _id: user._id, role: user.role } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          throw err;
        } else {
          res.status(201).json({
            message: "User created successfully",
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
            token,
          });
        }
      },
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
// @route POST /api/user/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid Credentials" });
    const isMatchPassword = await user.matchPassword(password);
    if (!isMatchPassword)
      return res.status(400).json({ error: "Invalid Credentials" });
    const payload = { user: { _id: user._id, role: user.role } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          throw err;
        } else {
          res.json({
            message: "User created successfully",
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
            token,
          });
        }
      },
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
