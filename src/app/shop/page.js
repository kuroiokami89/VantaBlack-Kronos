"use client";

import ShopItem from "./ShopItem";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import styled from "styled-components";

const StyledShop = styled.div`
  margin-top: 170px;
  margin-bottom: 150px;

  h1 {
    text-align: center;
    font-size: 3rem;
  }

  .container {
    margin-top: 50px;
    display: flex;
    row-gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export default function Shop() {
  return (
    <StyledShop id="shop" className={`${NeutralFace.className}`}>
      <h1>SHOP</h1>
      <div className="container">
        <ShopItem
          link="/product"
          imgClass="/omega-seamaster-aqua-terra.png"
          brand="Omega"
          model="Sea Master Acqua terra"
          price="7.000 £"
        />
        <ShopItem
          link="/product"
          imgClass="/OOZOO.png"
          brand="Oozoo"
          model="C11412"
          price="100 £"
        />
        <ShopItem
          link="/product"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="100 £"
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
    </StyledShop>
  );
}
