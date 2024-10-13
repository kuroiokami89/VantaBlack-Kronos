"use client";

import { useState, useEffect } from "react";
import { NeutralFace } from "./fonts";
import SlideButton from "react-slide-button";

export default function Header() {
  const [isOpen, setIsOpen] = useState({
    mobileMenu: false,
    cart: false,
  });

  // Function to toggle both mobile menu and cart
  const toggleElement = (element) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  const [reset, setReset] = useState(0);

  return (
    <header id="header" className={`${NeutralFace.className}`}>
      <div className="header-container">
        <a id="logo" className="link-btn" href="/">
          KRONOS
        </a>
        <div className="header-anchors">
          <a className="link link-btn" href="/shop">
            SHOP
          </a>
          <a className="link link-btn" href="/about">
            ABOUT
          </a>
          <a className="link link-btn" href="/contact">
            CONTACT
          </a>
        </div>
        <div className="mobile-menu">
          <a
            className="link link-btn"
            onClick={() => toggleElement("mobileMenu")}
          >
            MENU
          </a>
        </div>
        <a className="link link-btn" onClick={() => toggleElement("cart")}>
          CART
        </a>
      </div>

      {/* Cart Section */}
      <div
        className={`cart-menu menu-dropdown ${isOpen.cart ? "open" : "closed"}`}
      >
        <div className="cart-row">
          <img className="cart-img" src="/OOZOO.png" />
          <div className="cart-text">
            <div>
              <span>OOZOO</span>
              <span>steel black</span>
            </div>
            <span>100 $</span>
          </div>
        </div>
        <div className="cart-row">
          <img className="cart-img" src="/Rolex.png" />
          <div className="cart-text">
            <div>
              <span>ROLEX</span>
              <span>Sky Dweller</span>
            </div>
            <span>10.000 $</span>
          </div>
        </div>
        <div className="cart-checkout">
          <h3>SUBTOTAL</h3>
          <div>
            <h3>10.100 £</h3>
          </div>
        </div>
        <SlideButton
          mainText="PROCEED TO checkout"
          overlayText=""
          onSlideDone={() => {
            console.log("Done!");
          }}
          reset={reset}
        />
      </div>

      {/* Mobile Menu Section */}
      <div
        className={`mobile-menu menu-dropdown ${
          isOpen.mobileMenu ? "open" : "closed"
        }`}
      >
        <a className="link link-btn first-link" href="/shop">
          SHOP
        </a>
        <a className="link link-btn" href="/about">
          ABOUT
        </a>
        <a className="link link-btn" href="/contact">
          CONTACT
        </a>
      </div>
    </header>
  );
}
