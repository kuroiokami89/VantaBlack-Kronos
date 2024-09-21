import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import Intro from "../components/Intro";

export default function Product() {
  return (
    <div className={`prd-page ${NeutralFace.className}`}>
      <Intro video={"/Intro.mp4"} height={"85vh"} title={""} subTitle={""} />
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
        <p>
          Nel 2003, Rolex ha introdotto il 16110LV per commemorare il 50º
          anniversario del Submariner. Nel 2010, questo è stato aggiornato al
          116610LV, noto anche come "Hulk". Con una cassa più spessa, un vivace
          quadrante verde e una lunetta in Cerachrom, l'orologio è diventato uno
          dei Submariner più iconici e ricercati.
        </p>

        {/* <div className="line"></div>

        <div className="line"></div> */}
      </div>
    </div>
  );
}
