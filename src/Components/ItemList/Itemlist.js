import "./Itemlist.css";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { productList } from "../Data/Data";

const ItemList = () => {
  //Hook de estado - UseState
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(productList);
      } else {
        reject(error);
      }
    }, 2000);
  });

  const getProductsFromData = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.error(error);
      alert("No se pueden mostrar los productos. Intente más tarde");
    }
  };
  useEffect(() => {
    getProductsFromData();
  }, []);
  return (
    <div className="productList_container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <Item
                key={product.id}
                nombre={product.nombre}
                img={product.img}
                animal={product.animal}
                categoria={product.categoria}
                marca={product.marca}
                precio={product.precio}
                cantidad={product.cantidad}
                stock={product.stock}
                id={product.id}
              />
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};
export default ItemList;
