const User = require("../models/User");
var jwt = require("jsonwebtoken");

//MiddleWares to protect routes
const protect = async (req, res, next) => {
  let token;
  console.log("Authorization Header:", req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token:", token);
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded:", decoded);
      req.user = await User.findById(decoded.user._id).select("-password");
      console.log("req.user:", req.user);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized");
  }
};
// if admin or not
const admin = (req, res, next) => {
  req.user && req.user.role === "admin"
    ? next()
    : res.status(500).send({ msg: "Not Admin" });
};
module.exports = { protect, admin };
