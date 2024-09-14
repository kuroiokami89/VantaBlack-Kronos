"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Intro() {
  return (
    <div id="intro" className={`${NeutralFaceBold.className}`}>
      <video id="intro-video" autoPlay muted loop>
        <source src="/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Discover Timeless Elegance with Kronos</h1>
        <span className={`content-span ${NeutralFace.className}`}>
          SHOP BASED IN EUROPE - ITALY
        </span>
      </div>
    </div>
  );
}
