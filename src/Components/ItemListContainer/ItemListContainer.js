import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/Itemlist";
import { useState, useEffect } from "react";
import { getProducts } from "../Data/Data";

const ItemListContainer = (props) => {
  //const { saludo } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  return (
    //<h1>{saludo}</h1>;
    <div className="itemListContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
