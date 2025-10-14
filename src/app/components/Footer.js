"use client";

import { NeutralFace } from "./fonts";

export default function Footer() {
  return (
    <>
      <footer id="footer" className={`borders ${NeutralFace.className}`}>
        <a>@KRONOS</a>
        <a
          className="link-btn"
          href="https://www.linkedin.com/in/sergio-allushaj-a92b9717a/"
        >
          INSTAGRAM
        </a>
        <a className="link-btn link" href="https://github.com/kuroiokami89">
          FACEBOOK
        </a>
      </footer>
    </>
  );
}
