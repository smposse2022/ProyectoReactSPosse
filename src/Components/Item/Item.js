import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

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
  const onAdd = (quantity) => {
    alert(
      `Has agregado ${quantity} de ${nombre}, marca ${marca}, de ${cantidad} al carrito`
    );
  };

  return (
    <article className="product_card">
      <img className="product_card_image" src={img} alt="" />

      <h3 className="product_card_name">{nombre}</h3>
      <span>${precio}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />

      <Link to={`/detail/${id}`} className="detail_button">
        Ver Detalle
      </Link>
    </article>
  );
};

export default Item;
