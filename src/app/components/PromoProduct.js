"use client";

import styled from "styled-components";
import { NeutralFace, CreatoDisplayLight } from "./fonts";

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

  // .button {
  //   text-align: left;
  //   width: 200px;
  //   padding: 10px 15px;
  //   background: #50c878;
  //   font-size: 1.25rem;
  //   color: black;
  // }

  @media screen and (max-width: 768px) {
    .promo-product-text {
      padding: 100px 25px;
    }
  }
`;

{
  /* TODO ADD HREF PROPERTY FOR LINK BTN AND BTN STYLE */
}
export default function PromoProduct({ img, title, text, button }) {
  return (
    <StyledPromoProduct id="promo-product" className="borders">
      <img src={img} alt={title} />
      <div className={`promo-product-text ${CreatoDisplayLight.className}`}>
        <h2 className={`${NeutralFace.className}`}>{title}</h2>
        <p>{text}</p>
        <a href="#" className="buy-btn">
          {button}
        </a>
      </div>
    </StyledPromoProduct>
  );
}
