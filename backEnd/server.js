require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./database/dbConnect");
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
dbConnect();
app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
