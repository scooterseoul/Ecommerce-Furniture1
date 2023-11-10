import React, { useState, useEffect, useContext } from "react";
import styles from "./Cart.module.css";
import { ProductContext } from "./StripeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const { cart, incrementQty, decrementQty, removeFromCart } =
    useContext(ProductContext);

  useEffect(() => {
    const sum = cart.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.product.qty;
    }, 0);
    setTotal(sum / 100);
    setGst((total * 15) / 100);
    setOrderTotal(total + gst);
  }, [cart, gst, total]);

  const handleCheckout = async () => {
    const url = "http://localhost:5001/api/products/create-checkout-session"; // Replace with the actual API endpoint URL

    const lineItems = cart.map((item) => ({
      price_data: {
        currency: item.product.currency,
        product_data: {
          name: item.product.name,
        },
        unit_amount: item.product.price,
      },
      quantity: item.product.qty,
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
    console.log("RESPONSE : " + JSON.stringify(res));
    window.location.href = body.url;
  };

  return (
    <section className={styles.cartCont}>
      {cart && (
        <div className="cartButtonsCont">
          <button href="#back" className="btn" onClick={() => navigate(-2)}>
            CONTINUE SHOPPING
          </button>
          <button className="btn" onClick={handleCheckout}>
            CHECKOUT
          </button>
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
              <h3>Item Description</h3>
              <h3>Item Price</h3>
              <h3>Quantity</h3>
              <h3>Sub Total</h3>
            </div>
            {cart.map((cartItem) => {
              return (
                <figure key={cartItem.product.id} className={styles.product}>
                  <img src={cartItem.product.images[0]} alt={cartItem.name} />
                  <figcaption className={styles.productDescriptionCont}>
                    <div className={styles.productDescription}>
                      {cartItem.product.name}
                      <a
                        className={styles.removeBtn}
                        href="#remove"
                        onClick={() => removeFromCart(cartItem.product.id)}
                      >
                        Remove
                      </a>
                    </div>
                    <div className={styles.productQtyRow}>
                      <div className={styles.productRow}>
                        <div className={styles.unitPrice}>Unit Price: </div>
                        <div>
                          ${Number(cartItem.product.price / 100).toFixed(2)}
                        </div>
                      </div>
                      <div className={styles.productQtyCont}>
                        <div className={styles.productQuantity}>
                          <FontAwesomeIcon
                            size="xl"
                            className="fontawesomeIcons"
                            icon={faMinusSquare}
                            onClick={() =>
                              cartItem.product.qty > 0 &&
                              decrementQty(cartItem.product)
                            }
                          />
                          {cartItem.product.qty}
                          <FontAwesomeIcon
                            size="xl"
                            className="fontawesomeIcons"
                            icon={faPlusSquare}
                            onClick={() => incrementQty(cartItem.product)}
                          />
                        </div>
                        <div className={styles.productTotal}>
                          $
                          {Number(
                            (cartItem.product.price * cartItem.product.qty) /
                              100
                          ).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <div className={styles.orderSummaryCont}>
            {cart.length > 0 && (
              <>
                <hr className={styles.line} />
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
