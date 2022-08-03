import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Mercadolibre from "./Components/MercadoLibre/MercadoLibre";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mercadolibre />
      <ItemDetailContainer />
      <ItemListContainer saludo="Hola curso de React JS" />
    </div>
  );
}

export default App;
