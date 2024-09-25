"use client";

import { useState, useEffect } from "react";
import {
  NeutralFace,
  NeutralFaceBold,
  CreatoDisplayLight,
} from "../../components/fonts";
import VideoComponent from "../../components/VideoComponent";

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
        video={"/OOZOO.mp4"}
        height={"85vh"}
        title={""}
        subTitle={""}
      />
      <div className="prd-page-block blocco">
        <div className="shop-buttons">
          <div className="prd-title">
            <h1>Oozoo Black Steel</h1>
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
          <p className={`prd-description ${CreatoDisplayLight.className}`}>
            The Seamaster Aqua Terra, a tribute to OMEGA's maritime heritage,
            features a 38 mm stainless steel case with a wave-edged caseback.
            Its blue sun-brushed dial has a teak pattern, a date window at 6
            o'clock, and rhodium-plated hands filled with white Super-LumiNova.
            Paired with a polished and brushed bracelet, it's powered by the
            OMEGA Master Chronometer caliber 8800, certified by METAS for top
            watchmaking standards.
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
              } ${CreatoDisplayLight.className}`}
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
              } ${CreatoDisplayLight.className}`}
            >
              All our luxury watches come with a 2-year international
              manufacturer's warranty covering defects in materials or
              workmanship. This includes issues with the movement, hands, dial,
              or case.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
