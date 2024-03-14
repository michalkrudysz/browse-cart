import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.scss";

export default function CartModal() {
  return ReactDOM.createPortal(
    <dialog className={classes["cart-modal"]}>
      <div className={classes["cart-modal-content"]}>
        <h2>Twój koszyk</h2>
        <button>Zamknij</button>
      </div>
    </dialog>,
    document.getElementById("cart")
  );
}
