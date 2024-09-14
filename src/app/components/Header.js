"use client";

import { useEffect, useState } from "react";
import { NeutralFace } from "./fonts";

export default function Header() {
  return (
    <header id="header" className={`${NeutralFace.className}`}>
      <div className="header-container blocco">
        <a id="logo" className="link-btn" href="/">
          KRONOS
        </a>
        <div className="header-anchors">
          <a className="link link-btn" href="/shop">
            SHOP
          </a>
          {/* <a id="openButton" className="link link-btn">
            COLLECTIONS
          </a> */}
          <a className="link link-btn" href="/about">
            ABOUT
          </a>
          <a className="link link-btn" href="#footer">
            CONTACT
          </a>
        </div>
        <div className="mobile-menu">
          <a>MENU</a>
        </div>
        <a className="link link-btn">CART</a>
      </div>
    </header>
  );
}
