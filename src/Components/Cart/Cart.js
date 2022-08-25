import "./Cart.css";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getQuantity, totalPrice } = useContext(CartContext);

  const totalQuantity = getQuantity();
  const total = totalPrice();

  const CartProduct = ({ id, nombre, quantity, precio }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = (id) => {
      removeItem(id);
    };

    return (
      <article className="cart_product">
        <h2>{nombre}</h2>
        <div className="quantityAndPrice">
          <p>Cantidad: {quantity}</p>
          <p>Precio x Unidad: ${precio}</p>
        </div>
        <div className="cart_product_subtotal">
          <p>Subtotal: ${precio * quantity}</p>
          <button className="ButtonCartItem" onClick={() => handleRemove(id)}>
            Eliminar
          </button>
        </div>
      </article>
    );
  };

  if (totalQuantity === 0) {
    return (
      <>
        <h1>No hay productos en el carrito</h1>
        <button>
          <Link to="/">Sigue Comprando</Link>
        </button>
      </>
    );
  }

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((product) => (
        <CartProduct key={product.id} {...product} />
        //<CartItem key={product.id} {...product} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
    </div>
  );
};

export default Cart;
