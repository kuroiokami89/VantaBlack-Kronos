"use client"; // Required for styled-components and client-side logic

import styled from "styled-components";
import { NeutralFace, NeutralFaceBold } from "../components/fonts"; // Use correct font import

const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 75px;

  h1 {
    padding: 25px 30px;
    font-size: 4rem;
    text-align: left;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  h2 {
    padding: 25px 30px;
    font-size: 3rem;
    border-bottom: 1px solid white;
  }

  .cart-container {
    display: flex;
  }

  .item {
    display: flex;
    padding: 35px 0;
    font-size: 1.05rem;
    border-bottom: 1px solid white;
  }

  img {
    width: 350px;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cart-items {
    flex: 0 0 65%;
  }

  .quantity-controller {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .remove {
    cursor: pointer;
  }

  .checkout-container {
    flex: 1;
    border: 1px solid white;
    border-top: 0;
    border-right: 0;
  }

  ul {
    padding: 30px;
    font-size: 1.15rem;
    // border-bottom: 1px solid white;
  }

  li {
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    .cart-container,
    .item {
      flex-direction: column;
    }

    .item {
      gap: 20px;
    }

    .item-right {
      padding: 0 15px;
    }

    h1 {
      padding: 25px 15px;
    }

    img {
      width: 300px;
      margin: 0 auto;
    }

    .checkout-container {
      border-left: 0;
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
    <img src={imgSrc} alt={alt} />
    <div className="item-right">
      <div className="product-details">
        <span className={`${NeutralFaceBold.className}`}>{name}</span>
        <span>{code}</span>
        <span>COLOR: {color}</span>
        <span>EXTRAS: {extra}</span>
      </div>
      <div className="quantity-controller">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
      <div className="total">{(price * quantity).toFixed(2)}€</div>
      <div className="remove">REMOVE</div>
    </div>
  </div>
);

export default function Cart() {
  return (
    <StyledCheckout className={`${NeutralFace.className}`} id="cart">
      <h1>MY CART</h1>
      <div className="cart-container">
        <div className="cart-items">
          <ProductItem
            imgSrc="products-img/rolex-submariner/Rolex.png"
            alt="Rolex Watch"
            name="ROLEX SUBMARINER"
            code="#214332543654532"
            color="WHITE"
            extra="BATTERY HIGH 100"
            price={484.99}
            quantity={1}
          />
          <ProductItem
            imgSrc="products-img/oozoo-black/OOZOO.png"
            alt="OOZOO Watch"
            name="OOZOO BLACK"
            code="#214323532264353"
            color="BLACK"
            extra="FULL TIRE"
            price={489.99}
            quantity={3}
          />
          <ProductItem
            imgSrc="products-img/oozoo-black/OOZOO.png"
            alt="OOZOO Watch"
            name="OOZOO BLACK"
            code="#214323532264353"
            color="BLACK"
            extra="FULL TIRE"
            price={489.99}
            quantity={3}
          />
        </div>
        <div className="checkout-container">
          <h2>CHECKOUT</h2>
          <ul>
            <li>SUBTOTAL 168.00$</li>
            <li>COUNTRY USA</li>
            <li>ORDER TOTAL 168.00$</li>
          </ul>
        </div>
      </div>
    </StyledCheckout>
  );
}
