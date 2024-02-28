import { createContext, useContext, useState } from 'react';
import ProPieces from "@/components/Pro/ProPieces";
import useSWR from "swr";

// const { data } = useSWR("/api/products", { fallbackData: [] });
console.log("data>>>",data);

const ShoppingCartContext = createContext();
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
console.log("ShoppingCartContext>>>",ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prevItems) => [...prevItems, itemId]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((id) => id !== itemId));
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
