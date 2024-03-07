import classes from "./MainProduct.module.scss";
import wirelessCharger from "../assets/products/wireless-charger.png";

export default function MainProduct() {
  return (
    <div className={classes["main-product"]}>
      <div className={classes["left-section"]}>
        <div className={classes["content"]}>
          <div className={classes["introducing-product"]}>
            Twoje urządzenia zawsze naładowane i gotowe do działania –
            niezawodność i komfort w zasięgu ręki
          </div>
          <div className={classes["product-name"]}>
            Bezprzewodowa Stacja Ładowania 3 w 1
          </div>
          <div className={classes["product-description"]}>
            Poznaj multifunkcyjność w eleganckim wydaniu. Z naszą stacją
            ładowania nie tylko zasilisz swoje urządzenia, ale zyskasz także
            praktyczną lampkę nocną z dotykową kontrolą i trzema stopniami
            jasności. Bezpieczeństwo, wygoda i nowoczesny design idą w parze,
            zapewniając optymalne warunki do ładowania telefonu, zegarka i
            słuchawek. To więcej niż ładowarka – to innowacyjne rozwiązanie dla
            Ciebie
          </div>
          <div className={classes["product-price"]}>120 ZŁ</div>
          <div className={classes["button-container"]}>
            <button className={classes["button"]}>Dodaj do koszyka</button>
          </div>
        </div>
      </div>
      <div className={classes["right-section"]}>
        <div className={classes["product-image"]}>
          <img src={wirelessCharger} alt="3 in 1 Wireless Charger" />
        </div>
      </div>
    </div>
  );
}
