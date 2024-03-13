import "./App.scss";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartModal from "./components/CartModal";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cartItemCount, setCartItemCount] = useState([]);

  function addItem(id) {
    if (cartItemCount.find((item) => item.id === id)) {
      return;
    } else {
      setCartItemCount((prevItems) => [...prevItems, { id: id }]);
    }
  }
  useEffect(() => {
    console.log(cartItemCount);
  }, [cartItemCount]);

  let itemCount = cartItemCount.length;

  return (
    <>
      <CartModal />
      <Header cartItemCount={itemCount} />
      <Shop addItem={addItem} />
      <footer className="footer">&copy; Michał Krudysz 2024</footer>
    </>
  );
}

export default App;
