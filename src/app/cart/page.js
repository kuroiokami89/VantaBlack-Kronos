"use client"; // Required for styled-components and client-side logic

import styled from "styled-components";
import { NeutralFace } from "../components/fonts"; // Use correct font import

const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: flex-start;
  gap: 50px;

  h1 {
    font-size: 2rem;
    text-align: left;
  }

  .cart-container {
    width: 100%;
  }

  .header-row,
  .item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr; /* Same column layout for header and items */
    gap: 10px;
    align-items: center;
    padding: 10px 0; /* Same padding for consistency */
  }

  .header-row {
    font-weight: bold;
    border-bottom: 2px solid white;
    text-align: center;
  }

  .item {
    border-bottom: 1px solid white;
    padding: 35px 0; /* Ensure consistency with header */
    font-size: 1.05rem;
  }

  .product-info {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  img {
    width: 200px;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .quantity-controller {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .remove {
    text-align: center;
    color: red;
    cursor: pointer;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .header-row,
    .item {
      grid-template-columns: 1fr; /* Stack columns on smaller screens */
      text-align: left;
    }

    .product-info {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const ProductItem = ({
  imgSrc,
  alt,
  name,
  code,
  color,
  extra,
  price,
  quantity,
}) => (
  <div className="item">
    <div className="product-info">
      <img src={imgSrc} alt={alt} />
      <div className="product-details">
        <span>{name}</span>
        <span>{code}</span>
        <span>COLOR: {color}</span>
        <span>EXTRAS: {extra}</span>
      </div>
    </div>
    <div className="product-price">{price}€</div>
    <div className="quantity-controller">
      <button>-</button>
      <span>{quantity}</span>
      <button>+</button>
    </div>
    <div className="total">{(price * quantity).toFixed(2)}€</div>
    <div className="remove">✖</div>
  </div>
);

export default function Cart() {
  return (
    <StyledCheckout className={`blocco ${NeutralFace.className}`} id="cart">
      <h1>MY CART</h1>
      <div className="cart-container">
        {/* Header Row */}
        {/* <div className="header-row">
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>QTY</span>
          <span>TOTAL</span>
          <span></span>
        </div> */}

        {/* Product Items */}
        <ProductItem
          imgSrc="/Rolex.png"
          alt="Rolex Watch"
          name="ROLEX XXXX"
          code="#214332543654532"
          color="WHITE"
          extra="BATTERY HIGH 100"
          price={484.99}
          quantity={1}
        />
        <ProductItem
          imgSrc="/OOZOO.png"
          alt="OOZOO Watch"
          name="OOZOO XXXX"
          code="#214323532264353"
          color="BLACK"
          extra="FULL TIRE"
          price={489.99}
          quantity={3}
        />
        <ProductItem
          imgSrc="/OOZOO.png"
          alt="OOZOO Watch"
          name="OOZOO XXXX"
          code="#214323532264353"
          color="BLACK"
          extra="FULL TIRE"
          price={489.99}
          quantity={3}
        />
      </div>
    </StyledCheckout>
  );
}
