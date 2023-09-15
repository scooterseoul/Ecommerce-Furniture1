import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/rooms/kitchen">Rooms</Link>
      <Link to="/categories/chairs">Catagories</Link>
    </header>
  );
};

export default Header;
