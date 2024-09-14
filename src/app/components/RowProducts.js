import { NeutralFace, NeutralFaceBold } from "../components/fonts";

export default function RowProducts() {
  return (
    <div id="row-products-container">
      <a id="row-item">
        <img className="shop-item-img" src={`/Rolex.png`} />
        <div className="shop-item-text">
          <span className={`${NeutralFace.className}`}>BRAND : Roles</span>
          <span className={`${NeutralFace.className}`}>MODEL : AAA</span>
          <span className={`${NeutralFace.className}`}>PRICE : 20.000$</span>
        </div>
      </a>
      <a id="row-item">
        <img className="shop-item-img" src={`/Rolex.png`} />
        <div className="shop-item-text">
          <span className={`${NeutralFace.className}`}>BRAND : Roles</span>
          <span className={`${NeutralFace.className}`}>MODEL : AAA</span>
          <span className={`${NeutralFace.className}`}>PRICE : 20.000$</span>
        </div>
      </a>
      <a id="row-item">
        <img className="shop-item-img" src={`/Rolex.png`} />
        <div className="shop-item-text">
          <span className={`${NeutralFace.className}`}>BRAND : Roles</span>
          <span className={`${NeutralFace.className}`}>MODEL : AAA</span>
          <span className={`${NeutralFace.className}`}>PRICE : 20.000$</span>
        </div>
      </a>
      <a id="row-item">
        <img className="shop-item-img" src={`/Rolex.png`} />
        <div className="shop-item-text">
          <span className={`${NeutralFace.className}`}>BRAND : Roles</span>
          <span className={`${NeutralFace.className}`}>MODEL : AAA</span>
          <span className={`${NeutralFace.className}`}>PRICE : 20.000$</span>
        </div>
      </a>
    </div>
  );
}
