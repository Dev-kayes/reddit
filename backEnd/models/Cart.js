const { default: mongoose } = require("mongoose");

const cartItemSchema = mongoose.Schema(
  {
    productItems: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      require: true,
    },
    name: String,
    image: String,
    price: String,
    size: String,
    color: String,
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { _id: false },
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    guestId: String,
    products: [cartItemSchema],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("Cart", cartItemSchema);
