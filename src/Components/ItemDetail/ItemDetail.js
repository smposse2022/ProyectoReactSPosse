import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import NotificationContext from "../Notification/Notification";

const ItemDetail = ({
  id,
  nombre,
  animal,
  categoria,
  marca,
  edad,
  precio,
  cantidad,
  img,
  descripcion,
  stock,
}) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { addItem, getProductQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    setQuantity(getProductQuantity(id));
  }, [id]);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);
    const productToAdd = { id, nombre, precio, quantity };

    addItem(productToAdd);
    setNotification(
      "success",
      `Has agregado ${quantity} de ${nombre}, marca ${marca}, de ${cantidad} al carrito`
    );
  };
  const productQuantity = getProductQuantity(id);
  return (
    <div className="product_detail_container">
      <article className="product_card_detail">
        <img className="product_card_detail_image" src={img} alt={nombre} />

        <h3 className="product_card_detail_name">{nombre}</h3>
        <div className="product_card_detail_text">
          <p>{animal}</p>
          <p>{categoria}</p>
          <p>{marca}</p>
          <p>{edad}</p>
          <p>{cantidad}</p>
          <p>{descripcion}</p>
          <span>${precio}</span>
        </div>
        <div>
          {quantityToAdd === 0 ? (
            <ItemCount
              stock={stock}
              onAdd={handleOnAdd}
              initial={productQuantity}
            />
          ) : (
            <Link to="/cart" className="button_finish">
              Finalizar compra
            </Link>
          )}
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
