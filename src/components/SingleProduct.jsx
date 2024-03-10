import classes from "./SingleProduct.module.scss";

export default function Product({ product }) {
  return (
    <div className={classes.product}>
      <div className={classes["product-image"]}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={classes["product-title"]}>{product.title}</div>
      <div className={classes["product-description"]}>
        {product.description}
      </div>
      <div
        className={classes["product-price"]}
      >{`Cena: ${product.price}zł`}</div>
      <button className={classes.button}>Dodaj do koszyka</button>
    </div>
  );
}
