"use client";

import { useEffect, useRef } from "react";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import styled from "styled-components";
import ShopItem2 from "./ShopItem2";

const StyledBestSellers = styled.div`
  @media screen and (max-width: 480px) {
  }
`;

export default function BestSellers() {
  return (
    <StyledBestSellers>
      <h2>BEST SELLERS</h2>
      <div className="container">
        <ShopItem2
          link="/products/omega-seamaster"
          imgClass="/omega-seamaster-aqua-terra.png"
          brand="Omega"
          model="Sea Master Acqua terra"
          price="7.000 £"
        />
        <ShopItem2
          link="/products/oozoo-black"
          imgClass="/OOZOO.png"
          brand="Black Steel"
          model="C11412"
          price="100 £"
        />
        <ShopItem2
          link="/products/rolex-submariner"
          imgClass="/Rolex.png"
          brand="Rolex"
          model="Submariner"
          price="100 £"
        />
      </div>
    </StyledBestSellers>
  );
}
