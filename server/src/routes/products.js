const express = require("express");
const router = express.Router();
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Get all products with price details
router.get("/", async (req, res, next) => {
  try {
    const response1 = await Stripe.products.list({
      limit: 100,
    });
    const products = response1.data;
    const response2 = await Stripe.prices.list({
      limit: 100,
    });
    const prices = response2.data;

    const productsWithPrices = products.map((item, index) => {
      return {
        ...item,
        price: prices[index].unit_amount,
        currency: prices[index].currency,
      };
    });

    res.status(200).json(productsWithPrices);
  } catch (error) {
    next(error);
  }
});

router.post("/create-checkout-session", async (req, res) => {
  const lineItems = req.body.line_items;

  const CURRENT_DOMAIN = "http://localhost:5001/api/products";
  try {
    const session = await Stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${CURRENT_DOMAIN}/success`,
      cancel_url: `${CURRENT_DOMAIN}/cancel`,
    });
    res.json({ url: session.url });
  } catch (error) {
    res.json({ url: `${CURRENT_DOMAIN}/cancel` });
    console.log({ "Error : ": error.message });
  }
});

router.get("/cancel", (req, res) => {
  res.redirect("http://localhost:3000/cart?cancelled=true");
});

router.get("/success", async (req, res) => {
  res.redirect("http://localhost:3000/cart?successful=true");
});

module.exports = router;
