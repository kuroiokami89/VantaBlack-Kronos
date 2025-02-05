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
        video={"/products-img/sky-dweller/Rolex Sky-Dweller.mp4"}
        height={"100vh"}
        title={""}
        subTitle={""}
      />
      <div className="prd-page-block">
        <RowPicsComponent
          pic1={"/products-img/sky-dweller/sky-2.jpg"}
          pic2={"/products-img/sky-dweller/sky-3.jpg"}
          pic3={"/products-img/sky-dweller/sky-4.jpg"}
        />
        <div className="parent-container">
          <div className="prd-container">
            <div className="prd-title">
              <span>ROLEX</span>
              <h1>Rolex Sky Dweller</h1>
              <p className={`prd-description ${CreatoDisplayLight.className}`}>
                The Oyster Perpetual Sky-Dweller is designed for global
                travelers. Featuring the annual Saros calendar and Ring Command
                system, it displays two time zones, date, and month, all
                adjustable with a simple gesture. Since its debut in 2012, the
                Sky-Dweller has been an unmatched tool for managing time zones
                and organizing time with precision. With this elegant and
                technical watch, travelers stay in sync with the world, no
                matter the destination.
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
