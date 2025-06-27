import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart(){
    return useContext(CartContext)
}