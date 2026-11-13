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
// multer setUp using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// localhost:9000/api/upload/
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No File Uploaded" });
    }
    const streamUpload = (fileBuffer) => {
      console.log(fileBuffer);
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (error) {
            console.log(error);
            return reject(error);
          } else {
            console.log(result);
            return resolve(result);
          }
        });
        // User Streamifier to convert the file buffer into stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };
    // Call stream upload function
    const result = await streamUpload(req.file.buffer);
    return res.json({ imageURL: result.secure_url });
  } catch (error) {
    console.error(error);
    console.log(error.message);
    console.log(error.name);
    return res.status(500).json("Internal server error!");
  }
});

module.exports = router;
