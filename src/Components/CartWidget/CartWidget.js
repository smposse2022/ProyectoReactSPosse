import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  const quantity = getQuantity();

  return (
    <Link to="/cart">
      <span>
        <ion-icon name="cart-outline"></ion-icon>
        {quantity}
      </span>
    </Link>
  );
};
export default CartWidget;
