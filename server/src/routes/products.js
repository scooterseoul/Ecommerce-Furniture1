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
    // const productsWithPrices = await Promise.all(
    //   products.map(async (product) => {
    //     const price = await Stripe.prices.retrieve(product.default_price);
    //     return { ...product, price };
    //   })
    // );
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
    console.log(productsWithPrices[4]);

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
// Get all productsWithPrices with price details
// router.get("/", async (req, res, next) => {
//   try {
//     // const response = await Stripe.productsWithPrices.list({
//     //   limit: 40,
//     // });
//     // const productsWithPrices = response.data;
//     // const productsWithPricesWithPrices = await Promise.all(
//     //   productsWithPrices.map(async (product) => {
//     //     const price = await Stripe.prices.retrieve(product.default_price);
//     //     return { ...product, price };
//     //   })
//     // );
//
//     const productsWithPrices = response.data;

//     console.log(productsWithPrices[4]);
//     // const productsWithPricesWithPrices = await stripe.prices.list({
//     //   product: '{{PRODUCT_ID}}',
//     //   active: true,
//     // });
//     const chairs = [];
//     const tables = [];
//     const sofas = [];
//     const accessories = [];

//     const livingroom = [];
//     const dining = [];
//     const outdoors = [];
//     const office = [];

//     const otherTypes = [];
//     const otherRooms = [];

//     for (let i = 0; i < productsWithPrices.length; i++) {
//       if (productsWithPrices[i].metadata.type === "chair") {
//         chairs.push(productsWithPrices[i]);
//       } else if (productsWithPrices[i].metadata.type === "table") {
//         tables.push(productsWithPrices[i]);
//       } else if (productsWithPrices[i].metadata.type === "sofa") {
//         sofas.push(productsWithPrices[i]);
//       } else if (productsWithPrices[i].metadata.type === "accessory") {
//         accessories.push(productsWithPrices[i]);
//       } else {
//         otherTypes.push(productsWithPrices[i]);
//       }
//       if (productsWithPrices[i].metadata.room === "livingroom") {
//         livingroom.push(productsWithPrices[i]);
//       } else if (productsWithPrices[i].metadata.room === "dining") {
//         dining.push(productsWithPrices[i]);
//       } else if (productsWithPrices[i].metadata.room === "outdoors") {
//         outdoors.push(productsWithPrices[i]);
//       } else if (productsWithPrices[i].metadata.room === "office") {
//         office.push(productsWithPrices[i]);
//       } else {
//         otherRooms.push(productsWithPrices[i]);
//       }
//     }
//     console.log(productsWithPrices.length);
//     console.log("chairs", chairs.length);
//     console.log("tables", tables.length);
//     console.log("sofas", sofas.length);
//     console.log("accessories", accessories.length);
//     console.log("otherTypes", otherTypes.length);
//     console.log("livingroom", livingroom.length);
//     console.log("dining", dining.length);
//     console.log("outdoors", outdoors.length);
//     console.log("office", office.length);
//     console.log("otherRooms", otherRooms.length);

//     res.status(200).json(productsWithPrices);
//   } catch (error) {
//     next(error);
//   }
// });
// Get a single product with price details
// router.get("/:id", async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const product = await Stripe.products.retrieve(id);
//     const price = await Stripe.prices.retrieve(product.default_price);
//     const productWithPrice = { ...product, price };
//     res.status(200).json(productWithPrice);
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/create-checkout-session", async (req, res) => {
  const lineItems = req.body.line_items;
  // console.log("SERVER : " + JSON.stringify(lineItems));
  const session = await Stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ url: session.url });
});

module.exports = router;
