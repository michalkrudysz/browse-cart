import "./App.scss";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { useState } from "react";
import { useEffect } from "react";

function App() {
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

  return (
    <>
      <Header cartItemsInfo={cartItems} remove={remove} />
      <Shop addItem={addItem} />
      <footer className="footer">&copy; Michał Krudysz 2024</footer>
    </>
  );
}

export default App;
