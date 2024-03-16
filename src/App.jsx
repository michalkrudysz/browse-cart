import "./App.scss";
import Header from "./components/Header";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import MainProduct from "./components/MainProduct";
import { PRODUCTS } from "./products";
import { useState } from "react";
import { CartContext } from "./store/shopping-cart-context";

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

  const mainProduct = PRODUCTS.find((product) => {
    return product.id === "p7";
  });

  const ctxValue = {
    cart: cartItems,
    addItem: addItem,
    remove: remove,
    add: add,
  };

  return (
    <CartContext.Provider value={ctxValue}>
      <Header cartItemsInfo={cartItems} remove={remove} add={add} />
      <Shop
        mainProduct={<MainProduct addItem={addItem} data={mainProduct} />}
        products={PRODUCTS.filter((product) => product.id !== "p7").map(
          (product) => (
            <SingleProduct
              key={product.id}
              product={product}
              addItem={addItem}
            />
          )
        )}
      />
      <footer className="footer">&copy; Michał Krudysz 2024</footer>
    </CartContext.Provider>
  );
}

export default App;
