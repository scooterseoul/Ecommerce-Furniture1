// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
// import hamMenu from "../images/icons8-hamburger-menu-50.png";
import cartIcon from "../images/icons8-shopping-cart-64.png";
import Navbar from "./Navbar";
import "./navbar.css";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Navbar />
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>#Logo</div>
          <button className={styles.menuIcon} onClick={handleShowNavbar}>
            &#9776;
          </button>
          <div className={`${styles.navElements}  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink
                  activeClassName={`${showNavbar && styles.active}`}
                  to="/products/living"
                >
                  Living Room
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={`${showNavbar && styles.active}`}
                  to="/products/bedroom"
                >
                  Bedroom
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={`${showNavbar && styles.active}`}
                  to="/products/dinning"
                >
                  Dinning Room
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={`${styles.active}`}
                  to="/products/bathroom"
                >
                  Bathroom
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.active}
                  to="/cart"
                  className={styles.cartPic}
                >
                  <img src={cartIcon} alt="cart" className={styles.cartPic} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
