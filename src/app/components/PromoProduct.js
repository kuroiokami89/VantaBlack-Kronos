"use client";

import styled from "styled-components";
import { NeutralFace } from "./fonts";

const StyledPromoProduct = styled.div`
  display: flex;

  .promo-product-text {
    display: flex;
    flex: 0 0 50%;
    padding: 100px 50px;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
  }

  img {
    width: 500px;
    flex: 0 0 50%;
  }
`;

{
  /* TODO ADD HREF PROPERTY FOR LINK BTN AND BTN STYLE */
}
export default function PromoProduct({ img, title, text, button }) {
  return (
    <StyledPromoProduct id="promo-product">
      <img src={img} alt={title} />
      <div className={`promo-product-text ${NeutralFace.className}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        <a href="#" className="link-btn">
          {button}
        </a>
      </div>
    </StyledPromoProduct>
  );
}
