"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ProjectItem({ link, imgClass, brand, model, price }) {
  const projectRef = useRef(null);

  useEffect(() => {
    const el = projectRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 350 }, // Start with the element 50px down and hidden
      {
        opacity: 1,
        y: 0,
        duration: 1.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Start when the top of the element reaches 80% of the viewport height
          end: "bottom 20%", // End when the bottom of the element reaches 20% of the viewport height
          toggleActions: "play none none none", // Play the animation on scroll in, do nothing else
        },
      }
    );
  }, []);

  return (
    <a href={link} className="shop-item">
      <img className="shop-item-img" src={`${imgClass}`} />
      <div className="shop-item-text">
        <span className={`${NeutralFace.className}`}>BRAND : {brand}</span>
        <span className={`${NeutralFace.className}`}>MODEL : {model}</span>
        <span className={`${NeutralFace.className}`}>PRICE : {price}</span>
      </div>
    </a>
  );
}
