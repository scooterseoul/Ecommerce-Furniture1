// Import required modules
const express = require("express");
const cors = require("cors");
const productsRoutes = require("./routes/products");

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set up routes
app.use("/api/products", productsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

// Export the app
module.exports = app;
