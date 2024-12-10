"use client";

import VideoComponent from "./components/VideoComponent";
import RowProducts from "./components/RowProducts";
import PromoProduct from "./components/PromoProduct";
import BrandsRow from "./components/BrandsRow";
import ContactForm from "./components/ContactForm";
import BestSellers from "./components/BestSellersComponent";

export default function Home() {
  return (
    <>
      <VideoComponent
        video={"/Intro.mp4"}
        height={"100vh"}
        title={"Discover Timeless Elegance with Kronos"}
        subTitle={"SHOP BASED IN EUROPE - ITALY"}
        showMuteButton={false}
      />
      {/* <BrandsRow /> */}
      <PromoProduct
        img="/Rolex-Sky-Dweller.jpg"
        title="Rolex Sky Dweller"
        text={
          "Lo Sky‑Dweller è un orologio elegante e tecnicamente raffinato, pensato per coloro che considerano il mondo come un territorio aperto, senza confini, in cui le barriere scompaiono. Permette ai viaggiatori di evitare le insidie dei cambi d’ora per essere sempre un passo avanti. Dal momento stesso in cui mettono piede a terra, sono pronti a iniziare una nuova avventura."
        }
        button="BUY NOW"
      />
      {/* <RowProducts /> */}
      {/* <BestSellers /> */}
      <ContactForm />
    </>
  );
}
