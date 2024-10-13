"use client";

import ShopItem from "./ShopItem";
import {
  NeutralFace,
  NeutralFaceBold,
  CreatoDisplayLight,
} from "../components/fonts";
import styled from "styled-components";

const StyledShop = styled.div`
  margin-top: 170px;
  margin-bottom: 150px;

  h1 {
    font-size: 3rem;
  }

  .container {
    margin-top: 50px;
    display: flex;
    row-gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (max-width: 1450px) {
    .container {
      justify-content: center;
      column-gap: 5px;
    }
  }
`;

export default function Shop() {
  return (
    <StyledShop id="shop" className={`${NeutralFace.className}`}>
      <h1>SHOP</h1>
      <div className="container">
        <ShopItem
          link="/products/omega-seamaster"
          imgClass="/omega-seamaster-aqua-terra.png"
          brand="Omega"
          model="Sea Master Acqua terra"
          price="7.000 £"
        />
        <ShopItem
          link="/products/oozoo-black"
          imgClass="/OOZOO.png"
          brand="Black Steel"
          model="C11412"
          price="100 £"
        />
        <ShopItem
          link="/products/rolex-submariner"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Submariner"
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
