import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  nombre,
  animal,
  categoria,
  marca,
  edad,
  precio,
  cantidad,
  img,
  descripcion,
  stock,
}) => {
  const onAdd = (quantity) => {
    alert(
      `Has agregado ${quantity} de ${nombre}, marca ${marca}, de ${cantidad} al carrito`
    );
  };
  return (
    <div className="product_detail_container">
      <article className="product_card">
        <img className="product_card_image" src={img} alt={nombre} />

        <h3 className="product_card_name">{nombre}</h3>
        <p>{animal}</p>
        <p>{categoria}</p>
        <p>{marca}</p>
        <p>{edad}</p>
        <p>{cantidad}</p>
        <p>{descripcion}</p>
        <span>${precio}</span>
        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
      </article>
    </div>
  );
};

export default ItemDetail;
