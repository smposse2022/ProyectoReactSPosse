import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="main_bar">
        <Link to="/">
          <img
            className="logo_Image"
            src="https://i.ibb.co/ChvmWG5/Pug-Transparent.png"
            alt="Logo Pugs&Co"
          />
        </Link>
        <div className="Chart">
          <a className="chart_item">Carrito</a>
          <CartWidget />
        </div>
      </div>
      <div className="nav_menu">
        <NavLink to="/animal/Perro" className="nav_item">
          Perros
        </NavLink>
        <NavLink to="/animal/Gato" className="nav_item">
          Gatos
        </NavLink>
        <NavLink to="/animal/Peces" className="nav_item">
          Peces
        </NavLink>
        <NavLink to="/animal/Aves" className="nav_item">
          Aves
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
