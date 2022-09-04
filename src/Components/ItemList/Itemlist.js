import "./Itemlist.css";
import Item from "../Item/Item";

const itemList = ({ products }) => {
  return (
    <div className="productList_container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <Item
                key={product.id}
                nombre={product.nombre}
                img={product.img}
                animal={product.animal}
                categoria={product.categoria}
                marca={product.marca}
                precio={product.precio}
                cantidad={product.cantidad}
                stock={product.stock}
                id={product.id}
              />
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};
export default itemList;
