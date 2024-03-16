import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  add: () => {},
  remove: () => {},
});
