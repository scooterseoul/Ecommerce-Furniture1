const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Stripe = require("stripe");

// Get all products
router.get("/", async (req, res, next) => {
  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const products = await stripe.products.list({
      limit: 7,
    });
    // console.log(products);
    // const products = await Product.find({});
    res.status(200).json(products.data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

    const id = req.params.id;
    const product = await stripe.products.retrieve(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
