const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber.js");

// @route POST /api/subscribe
// @ desc handle newslatter subscription
// @access Public
// localhost:9000/api/subscribe
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is require" });
  try {
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber)
      return res.status(400).message({ message: "Email already subscribed" });
    subscriber = new Subscriber({ email });
    await subscriber.save();
    return res
      .status(201)
      .json({ message: "Successfully subscribe to the news latter" });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Invalid Credantial");
  }
});
module.exports = router;
