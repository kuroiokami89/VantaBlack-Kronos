"use client";

import { NeutralFace } from "./fonts";

export default function Footer() {
  return (
    <>
      <footer id="footer" className={`borders ${NeutralFace.className}`}>
        <span>KRONOS</span>
        <div className="footer-link">
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
          <a className="link link-btn copywright">
            ©2024 KRONOS - ALL RIGHTS RESERVED
          </a>
        </div>
      </footer>
    </>
  );
}
