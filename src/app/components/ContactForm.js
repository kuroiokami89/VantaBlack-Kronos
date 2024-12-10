"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function ContactForm() {
  return (
    <div id="contact-form" className={`borders ${NeutralFace.className}`}>
      <h2 className={`${NeutralFace.className}`}>
        SUBSCRIBE TO BE THE FIRST TO HEAR ABOUT KRONOS NEW DROPS
      </h2>
      <input
        type="email"
        id="email"
        placeholder="[EMAIL.ADRESS@GMAIL.COM]"
        required
      />
      <a className="link link-btn">SEND EMAIL</a>
    </div>
  );
}
