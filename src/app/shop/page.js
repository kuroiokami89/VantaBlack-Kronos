"use client";

import ShopItem from "./ShopItem";
import {
  NeutralFace,
  NeutralFaceBold,
  CreatoDisplayLight,
} from "../components/fonts";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

const StyledShop = styled.div`
  padding-top: 150px;

  h1 {
    font-size: 3rem;
  }

  .container {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #fff;
  }

  .container > div {
    width: calc(33.3333% - 1px);
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  .container > div:nth-child(3n) {
    border-right: none;
  }

  .container > div:nth-last-child(-n + 3) {
    border-bottom: none;
  }

  @media screen and (max-width: 900px) {
    .container > div {
      width: 100%;
      border-right: none;
    }

    .container > div:nth-last-child(-n + 1) {
      border-bottom: none;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      justify-content: space-around;
    }
  }
`;

export default function Shop() {
  return (
    <StyledShop id="shop" className={`borders ${NeutralFace.className}`}>
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
      <ContactForm />
    </StyledShop>
  );
}
