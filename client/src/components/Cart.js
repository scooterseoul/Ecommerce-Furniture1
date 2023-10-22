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
  const { cart } = useContext(ProductContext);
  console.log("VVVV : " + JSON.stringify(cart));

  return (
    <section className={styles.cartCont}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>YOUR SHOPPING CART</h2>
        <ul className={styles.cartMenu}>
          <li>
            <a href="#back" className="btn">
              CONTINUE SHOPPING
            </a>
          </li>
          <li>
            <a href="#checkout" className="btn">
              CHECKOUT
            </a>
          </li>
        </ul>
      </div>
      {cart && (
        <div className={styles.cartCont}>
          <table className={styles.cartTable}>
            <thead>
              <tr className={styles.cartTableHeading}>
                <th>Products</th>
                <th>Quatity</th>
                <th>Item Price</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => {
                return (
                  <tr>
                    <td>
                      <img src={cartItem.images[0]} alt={cartItem.name} />
                      <td>{cartItem.name}</td>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        size="xl"
                        className={styles.fontawesomeIcons}
                        icon={faMinusSquare}
                        onClick={() => {
                          qty > 0 && setQty(qty - 1);
                        }}
                      />
                      {qty}
                      <FontAwesomeIcon
                        size="xl"
                        className={styles.fontawesomeIcons}
                        icon={faPlusSquare}
                        onClick={() => {
                          setQty(qty + 1);
                        }}
                      />
                    </td>
                    <td>
                      $
                      {Number(cartItem.price.unit_amount_decimal / 100).toFixed(
                        2
                      )}
                    </td>
                    <td>
                      $
                      {Number(
                        (cartItem.price.unit_amount_decimal * qty) / 100
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className={styles.orderTotal}>
                  SubTotal:
                </td>
                <td>5000</td>
              </tr>
              <tr>
                <td colSpan={3} className={styles.orderTotal}>
                  GST:
                </td>
                <td>5000</td>
              </tr>
              <tr>
                <td colSpan={3} className={styles.orderTotal}>
                  Total (Incl. GST):
                </td>
                <td>5000</td>
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
