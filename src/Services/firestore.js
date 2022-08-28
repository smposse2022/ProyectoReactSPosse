import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "./Firebase";

export const getProducts = (petId) => {
  const collectionRef = !petId
    ? collection(dataBase, "productList")
    : query(collection(dataBase, "productList"), where("animal", "==", petId));

  return getDocs(collectionRef)
    .then((response) => {
      //console.log(response);
      const productsFromDataBase = response.docs.map((doc) => {
        const data = doc.data();
        //console.log(data);
        // De esa forma tengo el resto de los campos menos el id que estaba en un nivel superior. Hay que unir ese id con el resto de los datos.
        // Por tanto retorno un objeto con el id y el resto de las propiedades, que vengan de data
        return { id: doc.id, ...data };
      });
      return productsFromDataBase;
      // Al principio trae el array con los productos pero sólo muestra el id, no el resto de los campos. Para traerlos
      // hay una función que es data. Cuando ejecuto la función data(), tengo el resto de los campos.
    })
    .catch((error) => {
      return error;
    });
};
