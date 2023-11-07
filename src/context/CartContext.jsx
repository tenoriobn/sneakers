import { createContext, useContext, useState } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

export function CartProvider({ children }) {
  const [addItem, setAddItem] = useState(false);
  const [addToCart, setAddToCart] = useState([]);

  const [quantity, setQuantity] = useState(0); // Criar um próprio contexto <ProductPricing>

  return (
    <CartContext.Provider value={{ addItem, setAddItem, addToCart, setAddToCart, quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
  const { addItem, setAddItem, addToCart, setAddToCart, quantity, setQuantity } = useContext(CartContext);

  return {
    addItem, 
    setAddItem, 
    addToCart, 
    setAddToCart,
    quantity, 
    setQuantity
  }
}

