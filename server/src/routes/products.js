const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  try {
    // const products = await Product.find({});
    // res.status(200).json(products);
    res.status(200).json({ message: "Hello from the server!" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
