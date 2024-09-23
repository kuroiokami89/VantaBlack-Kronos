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
    </StyledShop>
  );
}
