import classes from "./Header.module.scss";
import logo from "../../public/logo.png";
import shoppingCart from "../assets/add-to-basket.png";
import CartModal from "./CartModal";
import { useState } from "react";

export default function Header({ cartItemCount }) {
  const [isOpen, setIsOpen] = useState(false);

  function toogleCartModal(value) {
    if (value === false) {
      setIsOpen(false);
    } else setIsOpen(true);
  }

  function renderCartModal() {
    if (isOpen) {
      return <CartModal close={toogleCartModal} />;
    } else {
      return null;
    }
  }

  return (
    <>
      {renderCartModal()}
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div onClick={() => toogleCartModal(true)} className={classes.cart}>
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
