const express = require("express");
const router = express.Router();

// Example in-memory data (replace with your actual database logic)
let items = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Sofa", category: "Furniture" },
    { id: 3, name: "Phone", category: "Electronics" },
    { id: 4, name: "Table", category: "Furniture" }
];

// DELETE route to remove an item by its ID
router.delete("/api/secondchance/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === itemId);

    if (itemIndex === -1) {
        return res.status(404).json({ message: "Item not found" });
    }

    // Remove the item from the array
    items.splice(itemIndex, 1);

    res.status(200).json({ message: "Item deleted successfully" });
});

module.exports = router;
