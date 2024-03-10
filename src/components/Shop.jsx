import classes from "./Shop.module.scss";
import MainProduct from "./MainProduct";
import SingleProduct from "./SingleProduct";
import { PRODUCTS } from "../products.js";

export default function Shop() {
  return (
    <div className={classes["shop-layout"]}>
      <MainProduct />
      <div className={classes["products-container"]}>
        <div className={classes["products-grid"]}>
          {PRODUCTS.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
