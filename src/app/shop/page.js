"use client";

import ShopItem from "./ShopItem";
import { NeutralFace } from "../components/fonts";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

const StyledShop = styled.div`
  padding-top: 75px;

  h1 {
    padding: 25px 30px;
    font-size: 4rem;
    border-top: 1px solid white;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    border-top: 1px solid #fff;
    box-sizing: border-box;
  }

  .container > div {
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  /* Remove the right border for the last item in each row */
  .container > div:nth-child(3n) {
    border-right: none;
  }

  /* Remove the bottom border for the last row */
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

  @media screen and (max-width: 1450px) {
    .container > div {
      width: calc(50% - 1px); /* Adjust the width for smaller screens */
      box-sizing: border-box;
    }

    .container > div:nth-child(3n) {
      border-right: 1px solid white;
    }

    .container > div:nth-last-child(-n + 3) {
      border-bottom: 1px solid white;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      justify-content: space-around;
    }

    .container > div {
      width: calc(100% - 1px); /* Adjust the width for smaller screens */
      box-sizing: border-box;
    }

    .container > div:nth-child(3n) {
      border-right: none;
    }
  }
`;

export default function Shop() {
  return (
    <StyledShop id="shop" className={`borders ${NeutralFace.className}`}>
      <h1>SHOP</h1>
      <div className="container">
        <ShopItem
          link="/products/rolex-sky-dweller"
          imgClass="/products-img/sky-dweller/sky-min.png"
          brand="Rolex"
          model="Sky Dweller"
          price="10.000 £"
        />
        <ShopItem
          link="/products/omega-seamaster"
          imgClass="/products-img/omega-seamaster/omega-seamaster-aqua-terra.png"
          brand="Omega"
          model="Sea Master Acqua terra"
          price="7.000 £"
        />
        <ShopItem
          link="/products/oozoo-black"
          imgClass="/products-img/oozoo-black/OOZOO.png"
          brand="Black Steel"
          model="C11412"
          price="100 £"
        />
        <ShopItem
          link="/products/rolex-submariner"
          imgClass="/products-img/rolex-submariner/Rolex.png"
          brand="Rolex"
          model="Submariner"
          price="100 £"
        />
        <ShopItem
          link="/product"
          imgClass="/products-img/rolex-submariner/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
        <ShopItem
          link="/product"
          imgClass="/products-img/rolex-submariner/Rolex.png"
          brand="Rolex"
          model="Vantablack Model"
          price="10.000 £"
        />
      </div>
      <ContactForm />
    </StyledShop>
  );
}
