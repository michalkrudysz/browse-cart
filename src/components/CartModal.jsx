import ReactDOM from "react-dom";
import classes from "./CartModal.module.scss";

export default function CartModal({ close }) {
  return ReactDOM.createPortal(
    <div className={classes["cart-modal"]}>
      <div className={classes["cart-modal-content"]}>
        <h2>Twój koszyk</h2>
        <button onClick={() => close(false)}>Zamknij</button>
      </div>
    </div>,
    document.getElementById("cart")
  );
}
