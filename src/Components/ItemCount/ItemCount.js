import "./ItemCount.css";
import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  //Hook de estado - useState
  const [quantity, setQuantity] = useState(initial);

  const addProduct = (num) => {
    setQuantity(quantity + num);
  };

  return (
    <div className="count_container">
      <div className="count_container__contador">
        <button
          className="count_container__button"
          onClick={() => addProduct(-1)}
          disabled={quantity === initial ? true : null}
        >
          -
        </button>
        <span className="count_container_quantity">{quantity}</span>
        <button
          className="count_container__button"
          onClick={() => addProduct(+1)}
          disabled={quantity === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="add_button"
        onClick={() => onAdd(quantity)}
        //disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};
export default ItemCount;
