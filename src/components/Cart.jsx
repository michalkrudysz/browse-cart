import classes from "./Cart.module.scss";

export default function Cart({}) {
  return (
    <div className={classes.cart}>
      <div className={classes["cart-items"]}>
        <li>
          <div className={classes["cart-item"]}>
            <div className={classes["product-name"]}>Nazwa</div>
            <div className={classes["product-quantity"]}>Nazwa</div>
          </div>
        </li>
        <li>
          <div className={classes["cart-item"]}>
            <div className={classes["product-name"]}>Nazwa</div>
            <div className={classes["product-quantity"]}>Nazwa</div>
          </div>
        </li>
        <li>
          <div className={classes["cart-item"]}>
            <div className={classes["product-name"]}>Nazwa</div>
            <div className={classes["product-quantity"]}>Nazwa</div>
          </div>
        </li>
      </div>
      <div className={classes["cart-total"]}>Suma: 0zł</div>
    </div>
  );
}
