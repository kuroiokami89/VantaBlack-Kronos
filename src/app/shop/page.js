import ShopItem from "./ShopItem";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";

export default function Shop() {
  return (
    <div id="shop" className={`${NeutralFace.className}`}>
      <h1>SHOP</h1>
      <div className="container">
        <ShopItem
          link="/product"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
        <ShopItem
          link="/product"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
        <ShopItem
          link="/product"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
        <ShopItem
          link="/product"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
        <ShopItem
          link="/product"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
        <ShopItem
          link="/product"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
      </div>
    </div>
  );
}
