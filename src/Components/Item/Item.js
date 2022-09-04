import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../Context/CartContext";
import NotificationContext from "../Notification/Notification";

const Item = ({
  id,
  nombre,
  animal,
  categoría,
  marca,
  precio,
  cantidad,
  img,
  stock,
}) => {
  const valor = useContext(CartContext);

  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

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
    <article className="product_card">
      <img className="product_card_image" src={img} alt="" />

      <h3 className="product_card_name">{nombre}</h3>
      <div className="priceAndDetail">
        <span>${precio}</span>

        <Link to={`/detail/${id}`} className="detail_button">
          Ver Detalle
        </Link>
      </div>
    </article>
  );
};

export default Item;
