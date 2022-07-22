import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="search_bar">
        <img
          className="logo_Image"
          src="img/PugTransparent.png"
          alt="Logo Pugs&Co"
        />
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
            <a>Perros</a>
          </li>
          <li>
            <a>Gatos</a>
          </li>
          <li>
            <a>Peces</a>
          </li>
          <li>
            <a>Aves</a>
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
