import classes from "./Cart.module.scss";

export default function Cart({ cart }) {
  console.log(cart);

  return (
    <div className={classes.cart}>
      <div className={classes["cart-items"]}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              <div className={classes["cart-item"]}>
                <div className={classes["product-name"]}>{item.title}</div>
                <div className={classes["add-remove"]}>
                  <button className={classes["add-button"]}>+</button>
                  <button className={classes["remove-button"]}>-</button>
                </div>
                <div className={classes["product-quantity"]}>
                  {item.quantity}
                </div>
                <div className={classes["product-price"]}>{item.price}zł</div>
              </div>
            </li>
          ))
        ) : (
          <div className={classes.error}>Karta zakupów jest pusta</div>
        )}
      </div>
      <div className={classes["cart-total"]}>Suma: zł</div>
    </div>
  );
}
