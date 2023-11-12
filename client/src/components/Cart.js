import React, { useState, useEffect, useContext } from "react";
import styles from "./Cart.module.css";
import { ProductContext } from "./StripeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(ProductContext);

  const sum = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.qty;
  }, 0);
  const total = sum / 100;
  const gst = total * 0.15;
  const orderTotal = total + gst;

  useEffect(() => {}, [cart, gst, total]);

  const handleCheckout = async () => {
    if (cart.reduce((sum, item) => sum + item.qty, 0) < 1) {
      alert("Your cart is empty");
      return;
    }
    const url = "http://localhost:5001/api/products/create-checkout-session"; // Replace with the actual API endpoint URL

    const lineItems = cart.map((item) => ({
      price_data: {
        currency: item.currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.qty,
    }));
    const data = {
      line_items: lineItems,
    };

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.error("Error:", error);
    });

    const body = await res.json();
    window.location.href = body.url;
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === id) {
          if (item.qty > 0) {
            acc.push({ ...item, qty: item.qty - 1 });
          } else {
            acc.push(item);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  return (
    <section className={styles.cartCont}>
      {cart && (
        <div className={styles.cartButtonsCont}>
          <button href="#back" className="btn" onClick={() => navigate(-2)}>
            &#11104; CONTINUE SHOPPING
          </button>
          {/* <button className="btn" onClick={handleCheckout}>
            CHECKOUT
          </button> */}
        </div>
      )}
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>YOUR SHOPPING CART</h2>
        <hr className={styles.line} />
      </div>

      {cart.length <= 0 ? (
        <>
          <div className={styles.productRow}>
            <h2>Your cart is empty</h2>
          </div>
          <div className={styles.checkOut}>
            <a href="#checkout" className="btn" onClick={() => navigate(-1)}>
              START SHOPPING
            </a>
          </div>
        </>
      ) : (
        <div className={styles.productCont}>
          <div className={styles.orderDetails}>
            <div className={styles.productHeadings}>
              {/* <h3>Item Description</h3> */}
              {/* <h3>Item Price</h3>
              <h3>Quantity</h3>
              <h3>Sub Total</h3> */}
            </div>
            {cart.map((cartItem) => {
              return (
                <figure key={cartItem.id} className={styles.product}>
                  <div className={styles.productImage}>
                    <img src={cartItem.images[0]} alt={cartItem.name} />
                  </div>
                  {/* <figcaption className={styles.productDescriptionCont}> */}
                  <h3 className={styles.itemNameHeader}>Item</h3>
                  <div className={styles.productDescription}>
                    <div className={styles.itemName}>{cartItem.name}</div>
                    <a
                      className={styles.removeBtn}
                      href="#remove"
                      onClick={() => removeFromCart(cartItem.id)}
                    >
                      Remove
                    </a>
                  </div>
                  {/* <div className={styles.productQtyRow}> */}
                  <h3 className={styles.itemPriceHeader}>Item Price</h3>
                  <div className={styles.productRow}>
                    <div className={styles.unitPrice}>Price: </div>
                    <div>${Number(cartItem.price / 100).toFixed(2)}</div>
                  </div>
                  <h3 className={styles.itemQtyHeader}>Quantity</h3>
                  <div className={styles.productQtyCont}>
                    <div className={styles.productQuantity}>
                      <FontAwesomeIcon
                        size="xl"
                        className="fontawesomeIcons"
                        icon={faMinusSquare}
                        onClick={() =>
                          cartItem.qty > 0 && decreaseQty(cartItem.id)
                        }
                      />
                      {cartItem.qty}
                      <FontAwesomeIcon
                        size="xl"
                        className="fontawesomeIcons"
                        icon={faPlusSquare}
                        onClick={() => increaseQty(cartItem.id)}
                      />
                    </div>
                    <div className={styles.productTotal}>
                      $
                      {Number((cartItem.price * cartItem.qty) / 100).toFixed(2)}
                    </div>
                  </div>
                  {/* </div> */}
                  {/* </figcaption> */}
                </figure>
              );
            })}
          </div>
          <div className={styles.orderSummaryCont}>
            {cart.length > 0 && (
              <>
                {/* <hr className={styles.line} /> */}
                <div className={styles.orderSummary}>
                  <h3>ORDER SUMMARY</h3>
                  <div className={styles.orderRow}>
                    SubTotal:
                    <span className={styles.alignRight1}>
                      ${Number(total).toFixed(2)}
                    </span>
                  </div>
                  <div className={styles.orderRow}>
                    GST:
                    <span>${Number(gst).toFixed(2)}</span>
                  </div>
                  <div className={`${styles.orderRow} ${styles.total}`}>
                    Total (Incl. GST):
                    <span>${Number(orderTotal).toFixed(2)}</span>
                  </div>
                  <button
                    className={`${styles.checkoutBtn} btn`}
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
