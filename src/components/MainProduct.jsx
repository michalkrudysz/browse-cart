import classes from "./MainProduct.module.scss";

export default function MainProduct({ data, addItem }) {
  const { image, title, description, price } = data;

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
          <img src={image} alt="3 in 1 Wireless Charger" />
        </div>
      </div>
    </div>
  );
}
