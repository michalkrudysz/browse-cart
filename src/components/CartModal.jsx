import { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.scss";

function CartModalComponent(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }));

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

const CartModal = forwardRef(CartModalComponent);

export default CartModal;
