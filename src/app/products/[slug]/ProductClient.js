"use client";

import { NeutralFace, CreatoDisplayLight } from "@/app/components/fonts";
import VideoComponent from "@/app/components/VideoComponent";
import ContactForm from "@/app/components/ContactForm";
import RowPicsComponent from "@/app/components/RowPicsComponent";
import BestSellers from "@/app/components/BestSellersComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductClient({ product }) {
  return (
    <div className={`prd-page ${NeutralFace.className}`}>
      <VideoComponent video={product.video} height="100vh" />

      <div className="prd-page-block">
        <RowPicsComponent
          pic1={product.gallery[0]}
          pic2={product.gallery[1]}
          pic3={product.gallery[2]}
        />

        <div className="parent-container">
          <div className="prd-container">
            <div className="prd-title">
              <span>{product.brand}</span>
              <h1>{product.model}</h1>

              <p className={`prd-description ${CreatoDisplayLight.className}`}>
                {product.description}
              </p>
            </div>

            <button className="buy-btn">
              ADD TO CART <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </button>
          </div>
        </div>
      </div>

      <BestSellers />
      <ContactForm />
    </div>
  );
}
