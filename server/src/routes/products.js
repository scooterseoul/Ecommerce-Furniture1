const express = require("express");
const router = express.Router();
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Product = require("../models/Product");

// Get all products with price details
router.get("/", async (req, res, next) => {
  try {
    const response = await Stripe.products.list({
      limit: 20,
    });
    const products = response.data;
    const productsWithPrices = await Promise.all(
      products.map(async (product) => {
        const price = await Stripe.prices.retrieve(product.default_price);
        return { ...product, price };
      })
    );
    const chairs = [];
    const tables = [];
    const sofas = [];
    const accessories = [];

    const livingroom = [];
    const dining = [];
    const outdoors = [];
    const office = [];

    const otherTypes = [];
    const otherRooms = [];

    for (let i = 0; i < products.length; i++) {
      if (products[i].metadata.type === "chair") {
        chairs.push(products[i]);
      } else if (products[i].metadata.type === "table") {
        tables.push(products[i]);
      } else if (products[i].metadata.type === "sofa") {
        sofas.push(products[i]);
      } else if (products[i].metadata.type === "accessory") {
        accessories.push(products[i]);
      } else {
        otherTypes.push(products[i]);
      }
      if (products[i].metadata.room === "livingroom") {
        livingroom.push(products[i]);
      } else if (products[i].metadata.room === "dining") {
        dining.push(products[i]);
      } else if (products[i].metadata.room === "outdoors") {
        outdoors.push(products[i]);
      } else if (products[i].metadata.room === "office") {
        office.push(products[i]);
      } else {
        otherRooms.push(products[i]);
      }
    }
    console.log(products.length);
    console.log("chairs", chairs.length);
    console.log("tables", tables.length);
    console.log("sofas", sofas.length);
    console.log("accessories", accessories.length);
    console.log("otherTypes", otherTypes.length);
    console.log("livingroom", livingroom.length);
    console.log("dining", dining.length);
    console.log("outdoors", outdoors.length);
    console.log("office", office.length);
    console.log("otherRooms", otherRooms.length);

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
