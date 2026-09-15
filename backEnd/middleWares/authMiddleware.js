const User = require("../models/User");
var jwt = require("jsonwebtoken");

//MiddleWares to protect routes
const protect = async (req, res, next) => {
  let token;

  if (
    req.header.authorization &&
    req.header.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.header.authorization.split("")[1];
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user._id).select("-password");
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
module.exports = protect;
