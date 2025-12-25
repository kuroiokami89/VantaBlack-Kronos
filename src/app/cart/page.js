"use client";

import styled from "styled-components";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";

const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 75px;

  h1 {
    padding: 25px 30px;
    font-size: 4rem;
    text-align: left;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  h2 {
    padding: 25px 30px;
    font-size: 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  .cart-container {
    display: flex;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 35px 0;
    font-size: 1.05rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  img {
    width: 250px;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .item-title {
    font-size: 1.5rem;
  }

  .item-right {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .cart-items {
    flex: 0 0 65%;
  }

  .quantity-controller {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    width: fit-content;
  }

  .quantity-controller button,
  .quantity-controller span {
    cursor: pointer;
    padding: 10px 15px;
    background: transparent;
    color: white;
    border: 0;
    transition: color 0.5s ease-in, background 0.5s ease-in;
  }

  .quantity-controller button:hover {
    background: white;
    color: black;
  }

  .remove {
    cursor: pointer;
  }

  .checkout-container {
    flex: 1;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 0;
    border-right: 0;
  }

  .checkout-info {
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .checkout-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .payment-container {
    display: flex;
    gap: 30px;
  }

  .payment-methods {
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .payment-methods img {
    cursor: pointer;
    padding: 2px 25px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    width: 100px;
  }

  .button {
    cursor: pointer;
    font-size: 2rem;
    padding: 10px 100px;
    border: 1px solid white;
    text-align: center;
    transition: background 0.25s ease-in, color 0.25s ease-in;
  }

  .button:hover {
    background: white;
    color: black;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 768px) {
    .cart-container,
    .item {
      flex-direction: column;
    }

    .item {
      gap: 20px;
    }

    h1 {
      font-size: 2.2rem;
      padding: 25px 15px;
    }

    img {
      width: 300px;
      margin: 0 auto;
    }

    .checkout-container {
      border-left: 0;
    }

    .payment-container {
      flex-wrap: wrap;
    }

    .button {
      padding: 10px 0px;
    }
  }
`;

const ProductItem = ({ imgSrc, alt, name, color, extra, price, quantity }) => (
  <div className="item">
    <img src={imgSrc} alt={alt} />
    <div className="item-right">
      <div className="product-details">
        <span className={`item-title ${NeutralFaceBold.className}`}>
          {name}
        </span>
        <span>COLOR: {color}</span>
        <span>EXTRAS: {extra}</span>
      </div>
      <div className="buttons-container">
        <div className="quantity-controller">
          <button>-</button>
          <span>{quantity}</span>
          <button>+</button>
        </div>
        <div className="total">{(price * quantity).toFixed(2)}€</div>
      </div>
    </div>
  </div>
);

export default function Cart() {
  // Calculate subtotal dynamically
  const products = [
    {
      price: 484.99,
      quantity: 1,
    },
    {
      price: 489.99,
      quantity: 3,
    },
    {
      price: 489.99,
      quantity: 3,
    },
  ];

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

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
          <h2>TOTAL</h2>
          <div className="checkout-info">
            <div className="checkout-row">
              <p>SUBTOTAL</p> <p>{subtotal.toFixed(2)}€</p>
            </div>
            <div className="checkout-row">
              <p>COUNTRY</p> <p>USA</p>
            </div>
            <div className="checkout-row">
              <p>ORDER TOTAL</p> <p>{subtotal.toFixed(2)}€</p>
            </div>
          </div>
          <div className="payment-methods">
            <a className="button">CHECKOUT</a>
            <div className="payment-container">
              <img src="/payments/gpay.png" alt="Gpay" />
              <img src="/payments/applepay.png" alt="Applepay" />
              <img src="/payments/master.png" alt="Mastercard" />
            </div>
          </div>
        </div>
      </div>
    </StyledCheckout>
  );
}
