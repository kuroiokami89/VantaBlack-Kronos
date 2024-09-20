"use client";

import { NeutralFace } from "./fonts";
import TextBlock from "./TextBlock";

export default function Footer() {
  return (
    <>
      <TextBlock title={"WHANT TO GET UPDATES ?"} backgroundColor="#28282b" />
      <div className="input-class">
        <input type="text" placeholder="NEWSLETTER SIGNUP" name="name" />
      </div>
      <footer id="footer" className={`${NeutralFace.className}`}>
        <span>KRONOS</span>
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
