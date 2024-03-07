import classes from "./Shop.module.scss";
import MainProduct from "./MainProduct";

export default function Shop() {
  return (
    <div className={classes.shop}>
      <MainProduct />
    </div>
  );
}
