import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../Context/CartContext";
import NotificationContext from "../Notification/Notification";

// Consumo el Context.
// Como se puede consumir + de 1 contexto, hay que decirle qué contexto voy a consumir
// Voy a necesitar la referencia con la que creé ese Contexto. La exporto e importo
// El Context es un Hook. Lo tengo que ejecutar siemrpe x regla de Hook

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
  //Guardo el Contexto en un Valor
  const valor = useContext(CartContext);
  //console.log(valor);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const handleOnAdd = (quantity) => {
    /*alert(
      `Has agregado ${quantity} de ${nombre}, marca ${marca}, de ${cantidad} al carrito`
    );*/
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
    <article className="product_card" /*onClick={handleClick}*/>
      <img className="product_card_image" src={img} alt="" />

      <h3 className="product_card_name">{nombre}</h3>
      <span>${precio}</span>

      <div>
        {quantityToAdd === 0 ? (
          <ItemCount
            stock={stock}
            onAdd={handleOnAdd}
            initial={productQuantity}
          />
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
