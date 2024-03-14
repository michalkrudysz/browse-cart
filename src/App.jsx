import "./App.scss";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItem(product) {
    console.log(product);
  }

  // useEffect(() => {
  //   console.log(cartItemCount);
  // }, [cartItemCount]);

  let itemCount = 5;

  return (
    <>
      <Header cartItemCount={itemCount} />
      <Shop addItem={addItem} />
      <footer className="footer">&copy; Michał Krudysz 2024</footer>
    </>
  );
}

export default App;
