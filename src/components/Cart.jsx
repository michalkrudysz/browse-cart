import classes from "./Cart.module.scss";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
  const { cart, removeOne, addOne } = useContext(CartContext);

  const total = parseFloat(
    cart
      .reduce((totalValue, currentItem) => {
        totalValue = totalValue + currentItem.price * currentItem.quantity;
        return totalValue;
      }, 0)
      .toFixed(2)
  );

  return (
    <div className={classes.cart}>
      <div className={classes["cart-items"]}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              <div className={classes["cart-item"]}>
                <div className={classes["product-name"]}>{item.title}</div>
                <div className={classes["add-remove"]}>
                  <button
                    className={classes["add-button"]}
                    onClick={() => addOne(item.id)}
                  >
                    +
                  </button>
                  <button
                    className={classes["remove-button"]}
                    onClick={() => removeOne(item.id)}
                  >
                    -
                  </button>
                </div>
                <div className={classes["product-quantity"]}>
                  {item.quantity}
                </div>
                <div className={classes["product-price"]}>{item.price} zł</div>
              </div>
            </li>
          ))
        ) : (
          <div className={classes.error}>Karta zakupów jest pusta</div>
        )}
      </div>
      {cart.length > 0 ? (
        <div className={classes["cart-total"]}>Suma: {total} zł</div>
      ) : null}
    </div>
  );
}
