# Proyecto React Js - Santiago Posse

Proyecto para el curso de React Js.

## Descripción:

El proyecto se creó a través de Create React App. Simula ser un ecommerce de un PetShop llamado Pugs&Co. Utilizo sólo css, ninguna otra librería de estilos.

### Routes:

path="/" : Muestra el listado general de todos los productos. El Componente que se encarga de mostrarlo es ItemListContainer.

path="/animal/:petId": Muestra el listado de productos filtrado por categoría de animal. El Componente que se encarga de mostrarlo es también ItemListContainer.

path="/detail/:productId": Muestra el detalle del producto seleccionado. El Componente que se encarga de mostrarlo es ItemDetailContainer.

path="/cart": Muestra el Carrito de compras con todos los productos agregados al mismo. El Componente que se encarga de mostrarlo es Cart.

path="/checkout": Muestra el formulario para crear la orden del pedido. El Componente que se encarga de mostrarlo es Checkout.
