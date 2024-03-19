import { createContext, useReducer } from "react";

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
