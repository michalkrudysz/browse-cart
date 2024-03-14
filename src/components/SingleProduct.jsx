import classes from "./SingleProduct.module.scss";

export default function Product({ product, addItem }) {
  const { id, image, title, description, price } = product;

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
