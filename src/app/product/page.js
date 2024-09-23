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
        video={"/Omega-Watch.mp4"}
        height={"85vh"}
        title={""}
        subTitle={""}
      />
      <div className="prd-page blocco">
        <div className="shop-buttons">
          <div className="prd-title">
            <h1>Seamaster Aqua Terra 150M</h1>
            <span>38 mm, steel</span>
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
            The Seamaster Aqua Terra is an exceptional tribute to OMEGA's rich
            maritime heritage. In this 38 mm model, the symmetrical case is
            crafted from stainless steel, and the caseback features a wave-edged
            design. <br />
            <br />
            The blue sun-brushed dial is distinguished by a horizontal teak
            pattern, inspired by the wooden decks of luxury boats. It also
            features a date window at 6 o'clock and rhodium-plated hands and
            indexes filled with white Super-LumiNova. <br />
            <br />
            Accompanied by a polished and brushed bracelet, this certified
            chronometer is powered by the OMEGA Master Chronometer caliber 8800,
            tested by the Swiss Federal Institute of Metrology (METAS) according
            to the highest standards in the watchmaking industry.
          </p>
          <div className="prd-specs">
            <div
              className="prd-specs-modal"
              onClick={() => toggleElement("specsModal")}
            >
              WATCH SPECS
            </div>
            <ul
              className={`modal-specs-paragraph ${
                isOpen.specsModal ? "open" : "closed"
              }`}
            >
              <li>Reference: 220.10.38.20.03.001</li>
              <li>Lug-to-lug distance: 19 mm</li>
              <li>Lug width: 45.0 mm</li>
              <li>Thickness: 12.2 mm</li>
              <li>Diameter: 38 mm</li>
              <li>Case: Stainless steel</li>
              <li>Dial color: Blue</li>
              <li>
                Crystal: Domed scratch-resistant sapphire crystal with
                anti-reflective treatment on both sides
              </li>
              <li>Water resistance: 15 bar (150 meters / 500 feet)</li>
              <li>Total product weight (approx.): 131 g</li>
              <li>Caliber: Omega 8800</li>
              <li>Movement type: Automatic winding</li>
              <li>Power reserve: 55 hours</li>
            </ul>
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
