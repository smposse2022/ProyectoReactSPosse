import CartContext from "../Context/CartContext";
import { useState, useContext } from "react";
import { dataBase } from "../../Services/Firebase";
import { addDoc, collection } from "firebase/firestore"; //La función addDoc de Firestore me permite subir documentos a FireStore
// Tengo que hacer referencia de a dónde lo voy a subir, en este caso a una colección.
const Checkout = () => {
  const { cart, getQuantity, getTotal } = useContext(CartContext);
  const totalQuantity = getQuantity;
  const total = getTotal;

  const createOrder = () => {
    const objOrder = {
      buyer: {
        firstName: "Santiago",
        lastName: "Posse",
        phone: "1530296235",
        adress: "Roque Saenz Peña 2817",
      },
      items: cart,
      totalQuantity,
      total,
      date: new Date(),
    };
    const orderRef = collection(dataBase, "orders"); // al hacer ref a una colección que no existe en FireStore, la crea
    addDoc(orderRef, objOrder).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      <h1>Checkout</h1>
      <button onClick={createOrder}>Generar Orden</button>
    </>
  );
};

export default Checkout;
