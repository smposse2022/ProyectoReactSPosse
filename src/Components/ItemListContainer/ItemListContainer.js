import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/Itemlist";

const ItemListContainer = (props) => {
  //const { saludo } = props;
  return (
    //<h1>{saludo}</h1>;
    <div className="itemListContainer">
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
