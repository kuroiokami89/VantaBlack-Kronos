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
        video={"/products-img/omega-seamaster/Omega-Watch.mp4"}
        height={"100vh"}
        title={""}
        subTitle={""}
      />
      <div className="prd-page-block">
        <RowPicsComponent
          pic1={
            "/products-img/omega-seamaster/omega-seamaster-aqua-terra-1.jpg"
          }
          pic2={
            "/products-img/omega-seamaster/omega-seamaster-aqua-terra-2.jpg"
          }
          pic3={
            "/products-img/omega-seamaster/omega-seamaster-aqua-terra-3.jpg"
          }
        />
        <div className="parent-container">
          <div className="prd-container">
            <div className="prd-title">
              <span>OMEGA</span>
              <h1>Seamaster Aqua Terra 150M</h1>
              <p className={`prd-description ${CreatoDisplayLight.className}`}>
                The Seamaster Aqua Terra features a 38 mm stainless steel case,
                wave-edged caseback, and blue sun-brushed dial with a teak
                pattern. It has a date window at 6 o'clock, rhodium-plated hands
                with white Super-LumiNova, and a polished bracelet. Powered by
                the METAS-certified Master Chronometer caliber 8800, it combines
                precision with elegance.
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
