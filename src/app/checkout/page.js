"use client"; // Required for styled-components and client-side logic

import styled from "styled-components";
import { NeutralFace } from "../components/fonts"; // Use correct font import

const StyledCheckout = styled.div`
  display: flex;
  padding-top: 100px;

  .checkout-container {
    display: flex;
  }

  .checkout-payment {
    flex: 0 0 50%;
  }
`;

export default function CheckoutPage() {
  return (
    <StyledCheckout className={`blocco ${NeutralFace.className}`} id="checkout">
      <h1>KRONOS CHECKOUT</h1>
      <div className="checkout-container">
        <div className="checkout-payment"></div>
        <div className="checkout-cart"></div>
      </div>
    </StyledCheckout>
  );
}
