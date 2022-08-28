import CartContext from "../Context/CartContext";
import { useState, useContext } from "react";
import { dataBase } from "../../Services/Firebase";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore"; //La función addDoc de Firestore me permite subir documentos a FireStore
import { async } from "@firebase/util";
// Tengo que hacer referencia de a dónde lo voy a subir, en este caso a una colección.
const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext);

  const totalQuantity = getQuantity;
  const total = getTotal;

  const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");

    const handleChangeFirstName = (e) => {
      setFirstName(e.target.value);
    };

    const handleChangeLastName = (e) => {
      setLastName(e.target.value);
    };

    const handleChangePhone = (e) => {
      setPhone(e.target.value);
    };

    const handleChangeAdress = (e) => {
      setAdress(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div style={{ width: "100%" }}>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="Ingrese su Nombre"
            value={firstName}
            onChange={handleChangeFirstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Ingrese su Apellido"
            value={lastName}
            onChange={handleChangeLastName}
          />
          <input
            type="text"
            name="phone"
            placeholder="Ingrese su Teléfono"
            value={phone}
            onChange={handleChangePhone}
          />
          <input
            type="text"
            name="adress"
            placeholder="Ingrese su Dirección"
            value={adress}
            onChange={handleChangeAdress}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  };

  const navigate = useNavigate();
  // useNavigate() es un hook que al ejecutarla, me navega a otra ruta

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const objOrder = {
        buyer: { firstName, lastName, phone, adress },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };
      /*const orderRef = collection(dataBase, "orders"); // al hacer ref a una colección que no existe en FireStore, la crea

  addDoc(orderRef, objOrder).then((response) => {
    console.log(response);
  });
  const orderRef = doc(dataBase, "productList", "GnV4QSWvOIlQuwUYUZkx");
  updateDoc(orderRef, { stock: 100 }).then((response) => {
    console.log(response);
  });*/
      const ids = cart.map((prod) => prod.id);
      const productListRef = collection(dataBase, "productList");

      const productsAddesFromFirestore = await getDocs(
        query(productListRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddesFromFirestore;

      const ourOfStock = [];

      const batch = writeBatch(dataBase);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDataBase = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDataBase >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDataBase - prodQuantity }); // doc.ref es la referencia directa que tengo dentro del objeto snapshot, de ese documento
        } else {
          ourOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (ourOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(dataBase, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        console.log(`El id de su orden es:${orderAdded.id} `);
        clearCart();
        navigate("/");
      } else {
        console.log(`Hay productos que están fuera de stock`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1>Se está generando tu ordenn</h1>;
  }

  return (
    <>
      <h1>Checkout</h1>
      <Form />
      <button onClick={createOrder}>Generar Orden</button>
    </>
  );
  // Falta hacer el Formulario con los imputs para agregar a cada order, sincronizar los states, y esos states insertarlos en el objeto de la order
};

export default Checkout;
