const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storage = multer.memoryStorage();
const upload = multer({ storage });

// localhost:9000/api/upload/
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      res.status(404).json({ message: "No File Uploaded" });
    }
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };
    const result = streamUpload(req.file.buffer);
    res.json({ imageURL: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error!");
  }
});

module.exports = router;
