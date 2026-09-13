const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});
