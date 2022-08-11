import { useState, createContext } from "react";
const CartContext = createContext();

// Un componente de alto orden es un componente que recibe otros componentes por parámetro.
// Al igual que una función de alto orden es una función que recibe otras funciones por parámetro.

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return productUpdated;
        } else {
          return prod;
        }
      });
      setCart(cartUpdated);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const newCartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(newCartWithoutProduct);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const getQuantity = () => {
    let accu = 0;
    cart.forEach((prod) => {
      accu += prod.quantity;
    });
    return accu;
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getQuantity,
        isInCart,
        removeItem,
        clearCart,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
