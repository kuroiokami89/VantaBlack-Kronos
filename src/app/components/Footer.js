"use client";

import { NeutralFace } from "./fonts";

export default function Footer() {
  return (
    <>
      <footer id="footer" className={`borders ${NeutralFace.className}`}>
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
          <a className="link link-btn copywright">©2025 KRONOS</a>
        </div>
      </footer>
    </>
  );
}
