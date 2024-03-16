import "./App.scss";
import Header from "./components/Header";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import MainProduct from "./components/MainProduct";
import { PRODUCTS } from "./products";
import CartProvider from "./store/shopping-cart-context";

function App() {
  const mainProduct = PRODUCTS.find((product) => {
    return product.id === "p7";
  });

  return (
    <CartProvider>
      <Header />
      <Shop
        mainProduct={<MainProduct data={mainProduct} />}
        products={PRODUCTS.filter((product) => product.id !== "p7").map(
          (product) => (
            <SingleProduct key={product.id} product={product} />
          )
        )}
      />
      <footer className="footer">&copy; Michał Krudysz 2024</footer>
    </CartProvider>
  );
}

export default App;
