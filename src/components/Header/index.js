import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Code Flix
      </Link>
      <Link to="/favoritos" className="favoritos">
        Meus fimes
      </Link>
    </header>
  );
}

export default Header;
