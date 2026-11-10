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
const uploadRoutes = require("./routes/uploadRoutes.js");
app.use(express.json());
app.use(cors());
// API routes:
/// api/user
//localhost:9000/api/user
app.use("/api/user", userRoutes);
/// api/products
//localhost:9000/api/products
app.use("/api/products", productRoutes);
/// api/cart
//localhost:9000/api/cart
app.use("/api/cart", cartRoutes);
/// api/checkOut
//localhost:9000/api/checkOut
app.use("/api/checkOut", checkOutRoutes);
/// api/orderRoutes
//localhost:9000/api/orders
app.use("/api/orders", orderRoutes);
/// api/uploadRoutes
//localhost:9000/api/upload
app.use("/api/upload", uploadRoutes);

const port = process.env.PORT || 3000;
dbConnect();
app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
