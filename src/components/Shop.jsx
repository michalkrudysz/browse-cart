import classes from "./Shop.module.scss";
import MainProduct from "./MainProduct";
import SingleProduct from "./SingleProduct";
import { PRODUCTS } from "../products.js";

const mainProduct = PRODUCTS.find((product) => {
  return product.id === "p7";
});

export default function Shop({ addItem }) {
  return (
    <div className={classes["shop-layout"]}>
      <MainProduct addItem={addItem} data={mainProduct} />
      <div className={classes["products-container"]}>
        <div className={classes["products-grid"]}>
          {PRODUCTS.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
