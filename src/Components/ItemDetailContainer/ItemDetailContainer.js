import { useState, useEffect } from "react";
import { getProductById } from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById("1")
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Detalle</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
