import classes from "./Shop.module.scss";

export default function Shop({ mainProduct, products }) {
  return (
    <div className={classes["shop-layout"]}>
      <div>{mainProduct}</div>
      <div className={classes["products-container"]}>
        <div className={classes["products-grid"]}>{products}</div>
      </div>
    </div>
  );
}
