const express = require("express");
const router = express.Router();

// Example items data (replace this with your actual database queries)
const items = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Sofa", category: "Furniture" },
    { id: 3, name: "Phone", category: "Electronics" },
    { id: 4, name: "Table", category: "Furniture" }
];

// Route to filter items based on category
router.get("/api/secondchance/search", (req, res) => {
    const { category } = req.query;

    if (!category) {
        return res.status(400).json({ message: "Category is required" });
    }

    const filteredItems = items.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
    );

    res.json(filteredItems);
});

module.exports = router;
