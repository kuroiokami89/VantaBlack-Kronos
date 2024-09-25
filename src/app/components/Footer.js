"use client";

import { NeutralFace } from "./fonts";

export default function Footer() {
  return (
    <>
      <div className="input-class">
        <input type="text" placeholder="NEWSLETTER SIGNUP" name="name" />
      </div>
      <footer id="footer" className={`${NeutralFace.className}`}>
        <div className="footer-link">
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
      </footer>
    </>
  );
}
