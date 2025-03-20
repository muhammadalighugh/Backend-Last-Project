const express = require("express");
const router = express.Router();

// Example in-memory data (replace with database later)
const items = [
    { id: 1, name: "Item 1", description: "First second chance item" },
    { id: 2, name: "Item 2", description: "Second second chance item" }
];

// Route to get all second chance items
router.get("/api/secondchance/items", (req, res) => {
    res.json(items);
});

// Route to get a specific item by ID
router.get("/api/secondchance/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
});

module.exports = router;
