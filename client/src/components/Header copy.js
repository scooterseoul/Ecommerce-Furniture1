import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import hamMenu from "../images/icons8-hamburger-menu-50.png";
import cartIcon from "../images/icons8-shopping-cart-64.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerCont}>
        <nav class="navbar">
          <div class="navbar-brand">SH Logo</div>
          <button type="button" class="navbar-toggle">
            &#9776;
          </button>
          <ul className={styles.navbar}>
            <Link to="/products/living">Living Room</Link>
            <Link to="/products/bedroom">Bedroom</Link>
            <Link to="/products/dinning">Dinning Room</Link>
            <Link to="/products/bathroom">Bathroom</Link>
            <Link to="/cart" className={styles.cartPic}>
              <img src={cartIcon} alt="cart" className={styles.cartPic} />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
