import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
// getDoc en singular me trae 1 sólo producto. Y la función doc tiene un 3er argumento, que aparte de decirle a qué base de datos tiene que ir a buscar, el nombre de la colección, le tengo que pasar el id del documento
import { getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../Services/Firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(dataBase, "productList", productId))
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div>
      <h1>Detalle</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
