require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./database/dbConnect");
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");
app.use(express.json());
app.use(cors());
// API routes
/// api/user
app.use("/api/user", userRoutes);
/// api/products
app.use("/api/products", productRoutes);

const port = process.env.PORT || 3000;
dbConnect();
app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
