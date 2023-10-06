import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import hamMenu from "../images/icons8-hamburger-menu-50.png";
import cartIcon from "../images/icons8-shopping-cart-64.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerCont}>
        <div className={styles.hamMenu}>
          <img src={hamMenu} alt="menu" className={styles.hamMenuPic} />
        </div>

        <div className={styles.logo}>
          <Link to="/">
            {/* <img src={logo} alt="logo" className={styles.logoPic} /> */}
            <p className={styles.logoText}>le SEAU a BOUE</p>
          </Link>
        </div>
        {/* <Link to="/rooms/kitchen">Rooms</Link>
      <Link to="/categories/chairs">Catagories</Link> */}
        <div className={styles.cart}>
          <img src={cartIcon} alt="cart" className={styles.cartPic} />
        </div>
      </div>
    </header>
  );
};

export default Header;
