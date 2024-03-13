import dialogPolyfill from "dialog-polyfill";
import "dialog-polyfill/dialog-polyfill.css";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import classes from "./CartModal.module.scss";

const CartModal = forwardRef((props, ref) => {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    },
  }));

  useEffect(() => {
    if (dialog.current) {
      dialogPolyfill.registerDialog(dialog.current);
    }
  }, []);

  return (
    <dialog ref={dialog} className={classes["cart-modal"]}>
      <div className={classes["cart-modal-content"]}>
        <h2>Twój koszyk</h2>
        <button onClick={() => dialog.current.close()}>Zamknij</button>
      </div>
    </dialog>
  );
});

CartModal.displayName = "CartModal";

export default CartModal;
