const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const products = require("./data/products");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Cart.deleteMany({});
    const createdUsers = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });
    const userID = createdUsers._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`Error with data import ${error}`);
    process.exit(1);
  }
};

seedData();
