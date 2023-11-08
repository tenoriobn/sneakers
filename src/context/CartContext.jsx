import { createContext, useContext, useState } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

export function CartProvider({ children }) {
  const [addItem, setAddItem] = useState(false);
  const [addToCart, setAddToCart] = useState([]);

  return (
    <CartContext.Provider value={{ addItem, setAddItem, addToCart, setAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
  const { addItem, setAddItem, addToCart, setAddToCart } = useContext(CartContext);

  return {
    addItem, 
    setAddItem, 
    addToCart, 
    setAddToCart
  }
}

