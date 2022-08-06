import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="search_bar">
        <Link to="/">
          <img
            className="logo_Image"
            src="../img/PugTransparent.png"
            alt="Logo Pugs&Co"
          />
        </Link>
        <input type="text" />
        <div className="userAndChart">
          <a>Usuario</a>
          <a>
            Carrito
            <CartWidget />
          </a>
        </div>
      </div>
      <div className="nav_menu">
        <ul className="menu_items">
          <li>
            <Link to="/animal/Perro">Perros</Link>
          </li>
          <li>
            <Link to="/animal/Gato">Gatos</Link>
          </li>
          <li>
            <Link to="/animal/Peces">Peces</Link>
          </li>
          <li>
            <Link to="/animal/Aves">Aves</Link>
          </li>
          <li>
            <a>Promociones</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
