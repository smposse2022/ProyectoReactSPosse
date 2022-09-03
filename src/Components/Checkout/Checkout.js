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

// Tengo que hacer referencia de a dónde lo voy a subir, en este caso a una colección.
// Tengo que completar el Readme. Terminar de completarlo agregando las rutas que faltan. Una descripción de los componentes que hacen referencia a esas nuevas rutas.
//Hacer el gif completo, hasta hacer el pedido y aparezca el id de la orden generada.
//Limpiar el proyecto de todas las cosas que no usamos
const Checkout = () => {
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

  const [isLoading, setIsLoading] = useState(false);

  const [orderCreated, setOrderCreated] = useState(false);

  const { cart, getQuantity, totalPrice, clearCart } = useContext(CartContext);

  const totalQuantity = getQuantity();

  const total = totalPrice();

  const navigate = useNavigate();
  // useNavigate() es un hook que al ejecutarla, me navega a otra ruta

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName,
          lastName,
          phone,
          adress,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((prod) => prod.id);

      const productListRef = collection(dataBase, "productList");

      const productsAddesFromFirestore = await getDocs(
        query(productListRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddesFromFirestore;

      const outOfStock = [];

      const batch = writeBatch(dataBase);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDataBase = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDataBase >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDataBase - prodQuantity }); // doc.ref es la referencia directa que tengo dentro del objeto snapshot, de ese documento
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(dataBase, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        console.log(`El id de su orden es:${orderAdded.id} `);
        clearCart();
        setOrderCreated(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        alert(`Hay productos que están fuera de stock`);
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
  if (orderCreated) {
    return (
      <h1>
        La orden fue creada correctamente, sera redirigido al listado de
        productos en 2 segundos
      </h1>
    );
  }

  return (
    <>
      <h1>Checkout</h1>
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
        </form>
      </div>
      <button onClick={createOrder}>Generar Orden</button>
    </>
  );
  // Falta hacer el Formulario con los imputs para agregar a cada order, sincronizar los states, y esos states insertarlos en el objeto de la order
};

export default Checkout;
