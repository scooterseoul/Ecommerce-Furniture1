import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/rooms/kitchen">Rooms</Link>
      <Link to="/categories/chairs">Catagories</Link>
    </header>
  );
};

export default Header;
