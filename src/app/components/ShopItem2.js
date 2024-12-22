"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NeutralFace, NeutralFaceBold } from "./fonts";
import styled from "styled-components";

const StyledShopItem2 = styled.div`
  .shop-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 650px;
    width: 630px;
    padding: 25px;
    position: relative;
  }

  .shop-item-img {
    width: 400px;
    height: auto;
    margin: auto;
    display: block;
  }

  .shop-item-text {
    font-size: 1.05rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 7px;
    padding-bottom: 10px;
    margin-top: 25px;
    color: white;
  }

  @media screen and (max-width: 768px) {
    .shop-item {
      padding: 15px;
      height: auto;
    }

    .shop-item-img {
      width: 250px;
      margin: 0;
    }
  }

  @media screen and (max-width: 480px) {
    .shop-item,
    .shop-item-img {
      width: 100%;
    }
  }
`;

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ShopItem2({ link, imgClass, brand, model, price }) {
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
    <StyledShopItem2>
      <a href={link} className="shop-item">
        <img className="shop-item-img" src={`${imgClass}`} />
        <div className="shop-item-text">
          <span className={`${NeutralFace.className}`}>BRAND : {brand}</span>
          <span className={`${NeutralFace.className}`}>MODEL : {model}</span>
          <span className={`${NeutralFace.className}`}>PRICE : {price}</span>
        </div>
      </a>
    </StyledShopItem2>
  );
}