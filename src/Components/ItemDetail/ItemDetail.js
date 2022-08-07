import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({
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
  const handleOnAdd = (quantity) => {
    alert(
      `Has agregado ${quantity} de ${nombre}, marca ${marca}, de ${cantidad} al carrito`
    );
    setQuantityToAdd(quantity);
  };
  return (
    <div className="product_detail_container">
      <article className="product_card">
        <img className="product_card_image" src={img} alt={nombre} />

        <h3 className="product_card_name">{nombre}</h3>
        <p>{animal}</p>
        <p>{categoria}</p>
        <p>{marca}</p>
        <p>{edad}</p>
        <p>{cantidad}</p>
        <p>{descripcion}</p>
        <span>${precio}</span>
        <div>
          {quantityToAdd === 0 ? (
            <ItemCount stock={stock} onAdd={handleOnAdd} initial={1} />
          ) : (
            <Link to="/cart">Finalizar compra</Link>
          )}
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
