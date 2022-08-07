import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  /*const handleClick = (e) => {
    e.stopPropagation();
    console.log("hice click en el item");
  };
*/
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const onAdd = (quantity) => {
    alert(
      `Has agregado ${quantity} de ${nombre}, marca ${marca}, de ${cantidad} al carrito`
    );
  };
  const handleOnAdd = (quantity) => {
    alert(
      `Has agregado ${quantity} de ${nombre}, marca ${marca}, de ${cantidad} al carrito`
    );
    setQuantityToAdd(quantity);
  };

  return (
    <article className="product_card" /*onClick={handleClick}*/>
      <img className="product_card_image" src={img} alt="" />

      <h3 className="product_card_name">{nombre}</h3>
      <span>${precio}</span>

      <div>
        {quantityToAdd === 0 ? (
          <ItemCount stock={stock} onAdd={handleOnAdd} initial={1} />
        ) : (
          <Link to="/cart">Finalizar compra</Link>
        )}
      </div>

      <Link to={`/detail/${id}`} className="detail_button">
        Ver Detalle
      </Link>
    </article>
  );
};

export default Item;
