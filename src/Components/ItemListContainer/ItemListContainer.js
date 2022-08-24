import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/Itemlist";
import { useState, useEffect } from "react";
/*import {
  getProducts,
  getProductsByCategory,
  getProductsByPet,
} from "../Data/Data";*/
import { Link, useParams } from "react-router-dom";
// Debo traerme los documentos de mi colección productList
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../Services/Firebase";

const ItemListContainer = (props) => {
  //const { saludo } = props;
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { petId } = useParams();
  /*useEffect(() => {
    const onResize = () => {
      console.log("Cambio de tamaño de la pantalla");
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
*/
  useEffect(() => {
    // Implemento Firestore. Comienzo con la consulta a mi base de datos
    // El filtrado va a cambiar en lo que le estoy pasando a la función getDocs
    const collectionRef = !petId
      ? collection(dataBase, "productList")
      : query(
          collection(dataBase, "productList"),
          where("animal", "==", petId)
        );

    getDocs(collectionRef)
      .then((response) => {
        //console.log(response);
        const productsFromDataBase = response.docs.map((doc) => {
          const data = doc.data();
          //console.log(data);
          // De esa forma tengo el resto de los campos menos el id que estaba en un nivel superior. Hay que unir ese id con el resto de los datos.
          // Por tanto retorno un objeto con el id y el resto de las propiedades, que vengan de data
          return { id: doc.id, ...data };
        });
        setProducts(productsFromDataBase);
        // Al principio trae el array con los productos pero sólo muestra el id, no el resto de los campos. Para traerlos
        // hay una función que es data. Cuando ejecuto la función data(), tengo el resto de los campos.
      })
      .catch((error) => {
        console.log(error);
      });
    /*if (categoryId) {
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
  */
  }, [petId]);

  return (
    //<h1>{saludo}</h1>;
    <div className="itemListContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
