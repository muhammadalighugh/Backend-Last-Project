const express = require("express");
const router = express.Router();
const multer = require("multer");

// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Upload folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Unique file name
    }
});

const upload = multer({ storage: storage });

// POST route to upload a file
router.post("/api/secondchance/items/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({
        message: "File uploaded successfully",
        file: req.file
    });
});

module.exports = router;
