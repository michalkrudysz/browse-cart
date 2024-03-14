import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.scss";

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={classes["cart-modal"]}>
      <div className={classes["cart-modal-content"]}>
        <h2>Twój koszyk</h2>
        <button onClick={closeModal}>Zamknij</button>
      </div>
    </div>,
    document.getElementById("cart")
  );
}
