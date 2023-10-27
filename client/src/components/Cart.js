import React, { useState, useEffect, useContext } from "react";
import styles from "./Cart.module.css";
import { ProductContext } from "./StripeContext";
import deskTopHeaderPic from "../images/dTMain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
const Cart = () => {
  // alert("CART");
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const { cart, incrementQty, decrementQty } = useContext(ProductContext);
  // console.log("Cart.js : " + JSON.stringify(cart.product));
  useEffect(() => {
    const sum = cart.reduce((total, cartItem) => {
      console.log(
        "SUBTOTAL : " +
          cartItem.product.price.unit_amount_decimal +
          "  " +
          cartItem.product.qty
      );
      return (
        total +
        cartItem.product.price.unit_amount_decimal * cartItem.product.qty
      );
    }, 0);
    setTotal(sum / 100);
  }, [cart]);

  console.log("SUBTOTAL 111 : " + total);
  //

  const handleCheckout = async () => {
    console.log("handleCheckout()");
    const url = "http://localhost:5001/api/products/create-checkout-session"; // Replace with the actual API endpoint URL
    const data = {
      key1: "value1",
      key2: "value2",
    };
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log("Response data:", data);
      // })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("RESPONSE : " + JSON.stringify(res));
    const body = await res.json();
    window.location.href = body.url;
  };

  return (
    <section className={styles.cartCont}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>YOUR SHOPPING CART</h2>
        <ul className={styles.cartMenu}>
          <li>
            <a href="#back" className={styles.cartButtons}>
              CONTINUE SHOPPING
            </a>
          </li>
          <li>
            <button className={styles.cartButtons} onClick={handleCheckout}>
              CHECKOUT
            </button>
          </li>
        </ul>
      </div>
      {cart && (
        <div className={styles.cartCont}>
          <table className={styles.cartTable}>
            <thead>
              <tr className={styles.cartTableHeading}>
                <th>Products</th>
                <th>Quantity</th>
                <th>Item Price</th>
                <th className={styles.alignRight}>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => {
                return (
                  <tr key={cartItem.product.id} className={styles.productRow}>
                    <td className={styles.product}>
                      <img
                        src={cartItem.product.images[0]}
                        alt={cartItem.name}
                      />
                      <div className={styles.productDescription}>
                        {cartItem.product.name}
                        <a href="#remove">Remove</a>
                      </div>
                    </td>
                    <td className={styles.productQuantity}>
                      <FontAwesomeIcon
                        size="xl"
                        className={styles.fontawesomeIcons}
                        icon={faMinusSquare}
                        onClick={() =>
                          cartItem.product.qty > 0 &&
                          decrementQty(cartItem.product)
                        }
                      />
                      {cartItem.product.qty}
                      <FontAwesomeIcon
                        size="xl"
                        className={styles.fontawesomeIcons}
                        icon={faPlusSquare}
                        onClick={() => incrementQty(cartItem.product)}
                      />
                    </td>
                    <td className={styles.alignRight}>
                      $
                      {Number(
                        cartItem.product.price.unit_amount_decimal / 100
                      ).toFixed(2)}
                    </td>
                    <td className={styles.alignRight}>
                      $
                      {Number(
                        (cartItem.product.price.unit_amount_decimal *
                          cartItem.product.qty) /
                          100
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className={styles.footer}>
              <tr className={styles.footerRow}>
                <td className={styles.orderTotal}>
                  SubTotal:
                  <span className={styles.alignRight1}>
                    ${Number(total).toFixed(2)}
                  </span>
                </td>
              </tr>
              <tr className={styles.footerRow}>
                <td className={styles.orderTotal}>
                  GST:
                  <span>5000</span>
                </td>
              </tr>
              <tr className={styles.footerRow}>
                <td className={styles.orderTotal}>
                  Total (Incl. GST):
                  <span>5000</span>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className={styles.checkOut}>
            <a href="#checkout" className="btn">
              CHECKOUT
            </a>
          </div>
        </div>
      )}
      {/* </div> */}
    </section>
  );
};

export default Cart;
