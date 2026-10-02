require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./database/dbConnect");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkOutRoutes = require("./routes/checkOutRoutes");
const orderRoutes = require("./routes/orderRoutes");
app.use(express.json());
app.use(cors());
// API routes
/// api/user
app.use("/api/user", userRoutes);
/// api/products
app.use("/api/products", productRoutes);
/// api/cart
app.use("/api/cart", cartRoutes);
/// api/checkOut
app.use("/api/checkOut", checkOutRoutes);
/// api/orderRoutes
app.use("/api/orders", orderRoutes);

const port = process.env.PORT || 3000;
dbConnect();
app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
