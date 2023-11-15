import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ProductContext } from "./StripeContext";
import cartIcon from "../images/icons8-shopping-cart-64.png";
import hamburger from "../images/icons8-hamburger-menu-50.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { cart } = useContext(ProductContext);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          LE SEAU a BOUE
        </Link>
        <button className={styles.menuIcon} onClick={handleShowNavbar}>
          <img src={hamburger} />
        </button>
        <div
          className={`${styles.navElements}
           ${
             showNavbar
               ? styles.navElement + " " + styles.active
               : styles.navElements + " " + styles.close
           }`}
        >
          <ul>
            <li>
              <Link to="/products/living" onClick={closeNavbar}>
                Living Room
              </Link>
            </li>
            <li>
              <Link to="/products/dining" onClick={closeNavbar}>
                Dining Room
              </Link>
            </li>
            <li>
              <Link to="/products/office" onClick={closeNavbar}>
                Office
              </Link>
            </li>
            <li>
              <Link to="/products/outdoors" onClick={closeNavbar}>
                Outdoors
              </Link>
            </li>
            <li>
              <Link to="/cart" className={styles.cartPic} onClick={closeNavbar}>
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
  );
};

export default Header;
