import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Mercadolibre from "./Components/MercadoLibre/MercadoLibre";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animation from "./Components/Animation/Animation";
import { createContext, useState } from "react";
import { CartContextProvider } from "./Components/Context/CartContext";
import { NotificationProvider } from "./Components/Notification/Notification";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

// Creo un Context
// A traves del value del .Provider puedo compartir 1 solo dato
// Si un componente que no es hijo(no está dentro del Provider) quiere acceder al valor del Provider, va a acceder al valor por defeto ( el del ()).

// Falta hacer un Footer
function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer saludo="Hola curso de React JS" />}
              />
              <Route path="/animal/:petId" element={<ItemListContainer />} />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
