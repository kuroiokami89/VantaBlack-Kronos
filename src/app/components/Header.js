"use client";

import { useState, useRef, useEffect } from "react";
import { NeutralFace } from "./fonts";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin-top: 20px;
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    & {
      padding: 15px;
    }
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: ${(props) => (props.isOpen ? "100%" : "0")};
  top: 0;
  left: 0;
  background-color: black;
  overflow: hidden;
  transition: height 0.5s ease;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayContent = styled.div`
  text-align: center;
  color: #fff;

  a {
    display: block;
    margin: 20px 0;
    font-size: 36px;
    text-decoration: none;
    color: #fff;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  // Close overlay if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <StyledHeader id="header2" className={`${NeutralFace.className}`}>
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
          <a className="link link-btn" onClick={openNav}>
            MENU
          </a>
        </div>
        <a className="link link-btn" href="/cart">
          CART
        </a>
      </div>

      <StyledOverlay isOpen={isOpen}>
        <div ref={overlayRef}>
          <OverlayContent>
            <a onClick={closeNav}>X</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/cart">Cart</a>
          </OverlayContent>
        </div>
      </StyledOverlay>
    </StyledHeader>
  );
}
