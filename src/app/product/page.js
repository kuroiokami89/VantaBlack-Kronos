"use client";

import { useState, useEffect } from "react";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import VideoComponent from "../components/VideoComponent";

export default function Product() {
  const [isOpen, setIsOpen] = useState({
    specsModal: false,
    warrantyModal: false,
  });

  // Function to toggle both mobile menu and cart
  const toggleElement = (element) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  return (
    <div className={`prd-page ${NeutralFace.className}`}>
      <VideoComponent
        video={"/Intro.mp4"}
        height={"85vh"}
        title={""}
        subTitle={""}
      />
      <div className="prd-page blocco">
        <div className="shop-buttons">
          <div className="prd-title">
            <h1>ROLEX SUBMARINER HULK</h1>
            <span>116610LV</span>
          </div>
          <a
            className="btn buy-btn"
            href="https://www.watchclub.com/rolex/submariner-date/116610lv-finalseries-ref-116610lv-year-2020"
            target="_blank"
          >
            ADD TO CART [£ 18,500]
          </a>
        </div>
        <div className="prd-container">
          <p className="prd-description">
            Nel 2003, Rolex ha introdotto il 16110LV per commemorare il 50º
            anniversario del Submariner. Nel 2010, questo è stato aggiornato al
            116610LV, noto anche come "Hulk". Con una cassa più spessa, un
            vivace quadrante verde e una lunetta in Cerachrom, l'orologio è
            diventato uno dei Submariner più iconici e ricercati.
          </p>
          <div className="prd-specs">
            <div
              className="prd-specs-modal"
              onClick={() => toggleElement("specsModal")}
            >
              SPECIFICATION
            </div>
            <p
              className={`modal-specs-paragraph ${
                isOpen.specsModal ? "open" : "closed"
              }`}
            >
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </p>
            <div
              className="prd-warranty-modal"
              onClick={() => toggleElement("warrantyModal")}
            >
              WARRANTY
            </div>
            <p
              className={`modal-warranty-paragraph ${
                isOpen.warrantyModal ? "open" : "closed"
              }`}
            >
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
