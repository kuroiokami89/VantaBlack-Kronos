import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import styled from "styled-components";

const StyledRowProducts = styled.div`
  padding: 100px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  #row-item .shop-item-img {
    width: 240px;
  }

  #row-item .shop-item-text {
    justify-content: unset;
    align-items: unset;
    text-align: center;
    margin-top: 45px;
  }
`;

export default function RowProducts() {
  return (
    <StyledRowProducts id="row-products-container">
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
    </StyledRowProducts>
  );
}
