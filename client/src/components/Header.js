// import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ProductContext } from "./StripeContext";
import cartIcon from "../images/icons8-shopping-cart-64.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { cartItemsCount } = useContext(ProductContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    // <div className={styles.navbar}>
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          le SEAU a BOUE
        </Link>
        <button className={styles.menuIcon} onClick={handleShowNavbar}>
          &#9776;
        </button>
        <div
          className={`${styles.navElements}
           ${
             showNavbar
               ? //  ? styles["navElementsActive"]
                 styles.navElement + " " + styles.active
               : styles.navElements + " " + styles.close
           }`}
        >
          {/* {`nav-links ${showNavbar ? styles.LinksActive : ''}`}> */}
          <ul>
            <li>
              <Link
                // activeClassName={`${showNavbar && styles.active}`}
                to="/products/living"
                onClick={closeNavbar}
              >
                Living Room
              </Link>
            </li>
            <li>
              <Link
                // activeClassName={`${showNavbar && styles.active}`}
                to="/products/bedroom"
                onClick={closeNavbar}
              >
                Bedroom
              </Link>
            </li>
            <li>
              <Link
                // activeClassName={`${showNavbar && styles.active}`}
                to="/products/dinning"
                onClick={closeNavbar}
              >
                Dinning Room
              </Link>
            </li>
            <li>
              <Link to="/products/bathroom" onClick={closeNavbar}>
                Bathroom
              </Link>
            </li>
            <li>
              <Link
                // activeClassName={styles.active}
                to="/cart"
                className={styles.cartPic}
                onClick={closeNavbar}
              >
                <img src={cartIcon} alt="cart" className={styles.cartPic} />
                {cartItemsCount > 0 && (
                  <span className={styles.cartItemCount}>{cartItemsCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Header;
