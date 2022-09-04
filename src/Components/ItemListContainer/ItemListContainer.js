import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/Itemlist";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../Services/firestore";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = () => {
  const { petId } = useParams();

  const getProductsFromFirestore = () => getProducts(petId);

  const { data, error, isLoading } = useAsync(getProductsFromFirestore, [
    petId,
  ]);

  if (isLoading) {
    return <h1>Cargando productos...</h1>;
  }
  if (error) {
    return <h1>Hubo un error</h1>;
  }

  if (data.length === 0) {
    return petId ? (
      <h1>No hay productos para mostrar{petId}</h1>
    ) : (
      <h1>No hay productos para mostrar</h1>
    );
  }

  return (
    <div>
      <h1>{`${petId || ""}`}</h1>
      <ItemList products={data} />
    </div>
  );
};

export default ItemListContainer;
