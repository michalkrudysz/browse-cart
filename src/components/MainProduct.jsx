import classes from "./MainProduct.module.scss";

export default function MainProduct() {
  return (
    <div className={classes["main-product"]}>
      <div className={classes.product}></div>
    </div>
  );
}
