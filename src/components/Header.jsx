import { useRef } from "react";
import classes from "./Header.module.scss";
import logo from "../../public/logo.png";
import shoppingCart from "../assets/add-to-basket.png";
import CartModal from "./CartModal";

export default function Header({ cartItemCount }) {
  const modalRef = useRef();

  return (
    <>
      <CartModal ref={modalRef} />
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
          <div className={classes["cart-amount"]}>{cartItemCount}</div>
        </div>
      </header>
    </>
  );
}
