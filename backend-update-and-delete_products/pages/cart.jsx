import { createContext, ReactNode, useContext, useState } from 'react';
import ProPieces from "@/components/Pro/ProPieces";
import useSWR from "swr";
import { type } from '@testing-library/user-event/dist/types/utility';

type ShoppingCartProviderProps = {
  children: ReactNode;
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) =>number
  increaseItemQuantity: (id: number) =>void
  decreaseItemQuantity: (id: number)=>void
  removeFromCart: (id: number)=>void
}

type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCratProvider({children}: ShoppingCartProviderProp) {
  const [cartItem, setCartItem] = useState<CartItem[]>([])

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity||0
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
       if (currItems.find(item => item.id===id)== null){
      return [...currItems, {id, quantity:1}]
       } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...id, quantity:item.qiuantity + 1}
          } else {
            return item
          }
        })
        }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
       if (currItems.find(item => item.id === id)?.quantity === 1){
      return currItems.filter(item => item.id !== id)
       } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...id, quantity:item.qiuantity - 1}
          } else {
            return item
          }
        })
        }
    })
  }

  function removeFromCart(id: number) {
    setCartItem(currItems => {
      return currItems.filter(item => item.id !==id)
    })
  }

  return (
            <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
              {children}
            </ShoppingCartContext.Provider>
  )
}





// const { data } = useSWR("/api/products", { fallbackData: [] });
// console.log("data>>>",data);

// const ShoppingCartContext = createContext();
// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext);
// };
// console.log("ShoppingCartContext>>>",ShoppingCartContext);

// export const ShoppingCartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (itemId) => {
//     setCartItems((prevItems) => [...prevItems, itemId]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((id) => id !== itemId));
//   };

//   return (
//     <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// };
