import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/Itemlist";
import { useState, useEffect } from "react";
import {
  getProducts,
  getProductsByCategory,
  getProductsByPet,
} from "../Data/Data";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  //const { saludo } = props;
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { petId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then((products) => {
        setProducts(products);
      });
    } else if (petId) {
      getProductsByPet(petId).then((products) => {
        setProducts(products);
      });
    } else {
      getProducts().then((products) => {
        setProducts(products);
      });
    }
  }, [categoryId, petId]);

  return (
    //<h1>{saludo}</h1>;
    <div className="itemListContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
