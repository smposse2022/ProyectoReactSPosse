import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const { saludo = "Hola curso de React JS" } = props;
  return <h1>{saludo}</h1>;
};

export default ItemListContainer;
