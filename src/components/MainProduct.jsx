import { useContext } from "react";
import PropTypes from "prop-types";
import classes from "./MainProduct.module.scss";
import { CartContext } from "../store/shopping-cart-context";

export default function MainProduct({ data }) {
  const { image, title, description, price } = data;
  const { addItem } = useContext(CartContext);

  return (
    <div className={classes["main-product"]}>
      <div className={classes["left-section"]}>
        <div className={classes["content"]}>
          <div className={classes["introducing-product"]}>
            Twoje urządzenia zawsze naładowane i gotowe do działania –
            niezawodność i komfort w zasięgu ręki
          </div>
          <div className={classes["product-name"]}>{title}</div>
          <div className={classes["product-description"]}>{description}</div>
          <div className={classes["product-price"]}>{price} ZŁ</div>
          <div className={classes["button-container"]}>
            <button onClick={() => addItem(data)} className={classes["button"]}>
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
      <div className={classes["right-section"]}>
        <div className={classes["product-image"]}>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}

MainProduct.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
