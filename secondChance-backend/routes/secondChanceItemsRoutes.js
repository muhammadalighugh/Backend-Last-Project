const express = require("express");
const router = express.Router();
const { connectDB } = require("../models/db"); // Import database connection function

// Connect to the database
async function connectToDatabase() {
    await connectDB();
}
connectToDatabase();

// Example route
router.get("/items", (req, res) => {
    res.send("Fetching second chance items...");
});

module.exports = router;
