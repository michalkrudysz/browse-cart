import classes from "./CartModal.module.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";

const CartModal = forwardRef((props, ref) => {
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      modalRef.current.style.display = "block";
    },
    closeModal: () => {
      modalRef.current.style.display = "none";
    },
  }));

  return (
    <div ref={modalRef} className={classes.modal}>
      <div className={classes["modal-content"]}>
        <h2>Your Cart</h2>
        <button onClick={() => ref.current.closeModal()}>Close</button>
      </div>
    </div>
  );
});

export default CartModal;
