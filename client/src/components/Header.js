// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import cartIcon from "../images/icons8-shopping-cart-64.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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
          {/* {`nav-links ${showNavbar ? styles.navLinksActive : ''}`}> */}
          <ul>
            <li>
              <NavLink
                // activeClassName={`${showNavbar && styles.active}`}
                to="/products/living"
                onClick={closeNavbar}
              >
                Living Room
              </NavLink>
            </li>
            <li>
              <NavLink
                // activeClassName={`${showNavbar && styles.active}`}
                to="/products/bedroom"
                onClick={closeNavbar}
              >
                Bedroom
              </NavLink>
            </li>
            <li>
              <NavLink
                // activeClassName={`${showNavbar && styles.active}`}
                to="/products/dinning"
                onClick={closeNavbar}
              >
                Dinning Room
              </NavLink>
            </li>
            <li>
              <NavLink
                // activeClassName={`${styles.active}`}
                to="/products/bathroom"
                onClick={closeNavbar}
              >
                Bathroom
              </NavLink>
            </li>
            <li>
              <NavLink
                // activeClassName={styles.active}
                to="/products/cart"
                className={styles.cartPic}
                onClick={closeNavbar}
              >
                <img src={cartIcon} alt="cart" className={styles.cartPic} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Header;
