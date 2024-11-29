"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { NeutralFace } from "./fonts";

export default function Footer() {
  return (
    <>
      <footer id="footer" className={`borders ${NeutralFace.className}`}>
        <span>KRONOS</span>
        <div className="footer-link">
          <a className="link link-btn">©2024 KRONOS - ALL RIGHTS RESERVED</a>
          <div className="site-links">
            <a className="link link-btn" href="/shop">
              SHOP
            </a>
            <a className="link link-btn" href="/about">
              ABOUT
            </a>
            <a className="link link-btn" href="#footer">
              CONTACT
            </a>
          </div>
          <div className="social-links">
            <a
              className="link-btn"
              href="https://www.linkedin.com/in/sergio-allushaj-a92b9717a/"
            >
              INSTAGRAM
            </a>
            <a className="link-btn link" href="https://github.com/kuroiokami89">
              FACEBOOK
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
