import classes from "./SingleProduct.module.scss";
import flashDrive from "../assets/products/flash-drive.png";

export default function Product() {
  return (
    <div className={classes.product}>
      <div className={classes["product-image"]}>
        <img src={flashDrive} alt="Pendrive Xiaomi USB 3.1 - 2TB" />
      </div>
      <div className={classes["product-title"]}>
        Pendrive Xiaomi USB 3.1 - 2TB
      </div>
      <div className={classes["product-description"]}>
        Pendrive USB 3.1 o pojemnościach 256GB, 512GB, 1TB, 2TB, jest typu plug
        and play, kompatybilny z Windows, Mac OS X, Linux. Zapewnia szybki
        transfer danych z przepustowością do 5 Gb/s dla USB 3.0 i 480 Mb/s dla
        USB 2.0, wytrzymałość na ponad 1000000 cykli zapisu oraz bezpieczne
        przechowywanie danych przez co najmniej 10 lat. Pracuje w zakresie
        temperatur od 0 °C do 60 °C.
      </div>
      <div className={classes["product-price"]}>Cena: 100zł</div>
      <button className={classes.button}>Dodaj do koszyka</button>
    </div>
  );
}
