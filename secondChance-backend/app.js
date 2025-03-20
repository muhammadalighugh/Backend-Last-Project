const express = require("express");
const app = express();
const searchRoutes = require("./routes/searchRoutes");

app.use(express.json());

// Use the search route
app.use("/api/secondchance", searchRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to SecondChance API");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
