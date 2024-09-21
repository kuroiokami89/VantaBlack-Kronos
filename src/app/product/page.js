import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import Intro from "../components/Intro";

export default function Product() {
  return (
    <div className={`prd-page ${NeutralFace.className}`}>
      <Intro video={"/Intro.mp4"} height={"85vh"} title={""} subTitle={""} />
      <div class="prd-page-right blocco">
        <div class="prd-description">
          <h1 class="prd-title">ROLEX SUBMARINER HULK // 116610LV</h1>
          <h2>Descrizione</h2>
          <p>
            Nel 2003, Rolex ha introdotto il 16110LV per commemorare il 50º
            <br />
            anniversario del Submariner. Nel 2010, questo è stato aggiornato al
            <br />
            116610LV, noto anche come "Hulk". Con una cassa più spessa, un
            vivace
            <br />
            quadrante verde e una lunetta in Cerachrom, l'orologio è diventato
            uno dei
            <br />
            Submariner più iconici e ricercati.
          </p>
        </div>

        <div class="line"></div>

        <div class="prd-specs">
          <h2>Caratteristiche</h2>
          <ul>
            <li>Marca: Rolex</li>
            <li>Modello: Submariner</li>
            <li>Referenza: 116610LV</li>
            <li>
              Cassa: Oystersteel 904L, vetro zaffiro antigraffio con lente
              Cyclops sulla data
            </li>
            <li>
              Quadrante: Verde, display Chromalight con luminescenza blu di
              lunga durata, indici in oro bianco 18K
            </li>
            <li>
              Lunetta: Girevole unidirezionale con graduazione di 60 minuti,
              inserto Cerachrom in ceramica antigraffio, numeri e graduazioni in
              platino
            </li>
            <li>Lancette: Oro bianco 18K</li>
            <li>
              Funzioni: Lancette centrali di ore, minuti e secondi. Data
              istantanea con impostazione rapida. Arresto dei secondi per
              regolazione precisa dell'ora
            </li>
            <li>Diametro: 40mm</li>
          </ul>
        </div>

        <div class="line"></div>

        <div class="shop-buttons">
          <h2>£ 18,500</h2>
          <a
            class="btn buy-btn"
            href="https://www.watchclub.com/rolex/submariner-date/116610lv-finalseries-ref-116610lv-year-2020"
            target="_blank"
          >
            AGGIUNGI AL CARRELLO
          </a>
        </div>
      </div>
    </div>
  );
}
