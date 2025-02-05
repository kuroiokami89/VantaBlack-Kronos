"use client";

import { NeutralFace, CreatoDisplayLight } from "../../components/fonts";
import VideoComponent from "../../components/VideoComponent";
import RowPicsComponent from "@/app/components/RowPicsComponent";
import ContactForm from "@/app/components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BestSellers from "@/app/components/BestSellersComponent";

export default function Product() {
  return (
    <div className={`prd-page ${NeutralFace.className}`}>
      <VideoComponent
        video={"/products-img/rolex-submariner/Rolex-Submariner.mp4"}
        height={"100vh"}
        title={""}
        subTitle={""}
      />
      <div className="prd-page-block">
        <RowPicsComponent
          pic1={"/products-img/rolex-submariner/2110431_sw6_theme2_full.jpg"}
          pic2={"/products-img/rolex-submariner/2110431_sw6_theme3_full.jpg"}
          pic3={
            "/products-img/rolex-submariner/2110431_sw6_zaMarketing_full.jpg"
          }
        />
        <div className="parent-container">
          <div className="prd-container">
            <div className="prd-title">
              <span>ROLEX</span>
              <h1>Rolex submariner</h1>
              <p className={`prd-description ${CreatoDisplayLight.className}`}>
                The Seamaster Aqua Terra, a tribute to OMEGA's maritime
                heritage, features a 38 mm stainless steel case with a
                wave-edged caseback. Its blue sun-brushed dial has a teak
                pattern, a date window at 6 o'clock, and rhodium-plated hands
                filled with white Super-LumiNova. Paired with a polished and
                brushed bracelet, it's powered by the OMEGA Master Chronometer
                caliber 8800, certified by METAS for top watchmaking standards.
              </p>
            </div>
            <a className="buy-btn">
              ADD TO CART <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </a>
          </div>
        </div>
      </div>
      <BestSellers />
      <ContactForm />
    </div>
  );
}
