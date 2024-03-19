import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  add: () => {},
  remove: () => {},
});

export default function CartProvider({ children }) {
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
    cart: cartItems,
    addItem: addItem,
    remove: remove,
    add: add,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
"  do tego mamy dojść:"import { createContext, useReducer } from "react";

export const CartContext = createContext();

function shoppingCartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingAddItem = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingAddItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case "REMOVE_ITEM": {
      return state.reduce((acc, item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    }
    case "INCREASE_QUANTITY": {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(shoppingCartReducer, []);

  function addItem(product) {
    dispatch({ type: "ADD_ITEM", payload: product });
  }

  function remove(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function add(id) {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  }

  const ctxValue = {
    cart,
    addItem,
    remove,
    add,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}