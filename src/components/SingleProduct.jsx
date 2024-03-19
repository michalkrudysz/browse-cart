import PropTypes from "prop-types";
import classes from "./SingleProduct.module.scss";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function Product({ product }) {
  const { addItem } = useContext(CartContext);
  const { image, title, description, price } = product;

  return (
    <div className={classes.product}>
      <div className={classes["product-image"]}>
        <img src={image} alt={title} />
      </div>
      <div className={classes["product-title"]}>{title}</div>
      <div className={classes["product-description"]}>{description}</div>
      <div className={classes["product-price"]}>Cena: {price}zł</div>
      <button onClick={() => addItem(product)} className={classes.button}>
        Dodaj do koszyka
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
