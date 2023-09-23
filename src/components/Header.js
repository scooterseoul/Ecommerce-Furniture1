import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../images/icons8-bucket-64.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <Link to="/">Home</Link>
      <Link to="/rooms/kitchen">Rooms</Link>
      <Link to="/categories/chairs">Catagories</Link>
    </header>
  );
};

export default Header;
