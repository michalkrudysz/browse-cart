import ReactDOM from "react-dom";
import classes from "./CartModal.module.scss";

const CartModal = () => {
  return ReactDOM.createPortal(
    <div className={classes["cart-modal"]}>
      <div className={classes["cart-modal-content"]}>
        <h2>Twój koszyk</h2>
        <button>Zamknij</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
