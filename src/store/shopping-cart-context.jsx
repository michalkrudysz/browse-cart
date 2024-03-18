import { createContext } from "react";
import { useState, useReducer } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  add: () => {},
  remove: () => {},
});

function shoppingCartReducer(state, action) {
  return state;
}

export default function CartProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    []
  );

  const [cartItems, setCartItems] = useState([]);

  function addItem(product) {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

      setCartItems(updatedItems);
    } else {
      const newItem = {
        ...product,
        quantity: 1,
      };

      setCartItems([...cartItems, newItem]);
    }
  }

  function remove(id) {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find((item) => item.id === id);
      if (!existingProduct) {
        return currentItems;
      }
      if (existingProduct.quantity > 1) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return currentItems.filter((item) => item.id !== id);
      }
    });
  }
  function add(id) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    });
  }
  const ctxValue = {
    cart: shoppingCartState,
    addItem: addItem,
    remove: remove,
    add: add,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
