import classes from "./Header.module.scss";
import logo from "../../public/logo.png";
import shoppingCart from "../assets/add-to-basket.png";
import CartModal from "./CartModal";
import { useRef } from "react";

export default function Header({ cartItemsInfo }) {
  const modalRef = useRef();

  const cartQuantity = cartItemsInfo.length === 0 ? 0 : cartItemsInfo.length;

  return (
    <>
      <CartModal cart={cartItemsInfo} ref={modalRef} />
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div onClick={() => modalRef.current.open()} className={classes.cart}>
          <img
            src={shoppingCart}
            alt="Ikona koszyka sklepowego"
            className={classes["cart-icon"]}
          />
          <div className={classes["cart-text"]}>Twój koszyk</div>
          <div className={classes["cart-amount"]}>{cartQuantity}</div>
        </div>
      </header>
    </>
  );
}
