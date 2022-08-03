import "./Item.css";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";

export const Mercadolibre = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=auto`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json.results);
      });
  }, []);
  console.log(products);
};
const Item = ({
  Id,
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
    </article>
  );
};

export default Item;
