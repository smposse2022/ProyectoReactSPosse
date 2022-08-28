import "./ItemCount.css";
import React, { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  useEffect(() => {
    setQuantity(initial);
    return () => setQuantity(1);
  }, [initial]);

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

      <button className="add_button" onClick={() => onAdd(quantity)}>
        Añadir
      </button>
    </div>
  );
};
export default ItemCount;
