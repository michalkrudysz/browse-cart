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

      // Aktualizujemy stan cartItems nową tablicą produktów.
      setCartItems(updatedItems);
    } else {
      // Jeśli produkt nie istnieje w koszyku, dodajemy go jako nowy element.
      // Ustawiamy jego ilość na 1, ponieważ jest to pierwsze dodanie do koszyka.
      const newItem = {
        ...product, // Kopiujemy wszystkie właściwości produktu.
        quantity: 1, // Ustawiamy quantity na 1.
      };

      // Aktualizujemy stan cartItems, dodając nowy produkt do istniejącej tablicy.
      setCartItems([...cartItems, newItem]);
    }
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  let itemCount = cartItems.length;

  return (
    <>
      <Header cartItemCount={itemCount} />
      <Shop addItem={addItem} />
      <footer className="footer">&copy; Michał Krudysz 2024</footer>
    </>
  );
}

export default App;
