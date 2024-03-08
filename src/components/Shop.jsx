import classes from "./Shop.module.scss";
import MainProduct from "./MainProduct";
import SingleProduct from "./SingleProduct";

export default function Shop() {
  return (
    <div className={classes["shop-layout"]}>
      <MainProduct />
      <div className={classes["products-container"]}>
        <div className={classes["products-grid"]}>
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
    </div>
  );
}
