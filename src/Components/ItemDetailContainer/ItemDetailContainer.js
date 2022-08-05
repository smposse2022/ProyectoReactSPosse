import { useState, useEffect } from "react";
import { getProductById } from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  const { productId } = useParams();

  useEffect(() => {
    getProductById(`${productId}`).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <div>
      <h1>Detalle</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
