const { MongoClient } = require("mongodb");

const uri = "your_mongodb_connection_string"; // Replace with your actual MongoDB connection string
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = { connectDB, client };
