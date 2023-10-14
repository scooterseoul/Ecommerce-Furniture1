const express = require("express");
const router = express.Router();
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Product = require("../models/Product");

// Get all products with price details
router.get("/", async (req, res, next) => {
  try {
    const products = await Stripe.products.list({
      limit: 20,
    });

    const productsWithPrices = await Promise.all(
      products.data.map(async (product) => {
        const price = await Stripe.prices.retrieve(product.default_price);
        return { ...product, price };
      })
    );

    res.status(200).json(productsWithPrices);
  } catch (error) {
    next(error);
  }
});

// Get a single product with price details
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Stripe.products.retrieve(id);
    const price = await Stripe.prices.retrieve(product.default_price);
    const productWithPrice = { ...product, price };
    res.status(200).json(productWithPrice);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
