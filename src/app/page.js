"use client";

import Intro from "./components/Intro";
import RowProducts from "./components/RowProducts";
import PromoProduct from "./components/PromoProduct";
import TextBlock from "./components/TextBlock";

export default function Home() {
  return (
    <>
      <Intro
        video={"/Intro.mp4"}
        height={"100vh"}
        title={"Discover Timeless Elegance with Kronos"}
        subTitle={"SHOP BASED IN EUROPE - ITALY"}
      />
      <PromoProduct
        img="/Rolex-Sky-Dweller.jpg"
        title="Rolex Sky Dweller"
        text={
          "Lo Sky‑Dweller è un orologio elegante e tecnicamente raffinato, pensato per coloro che considerano il mondo come un territorio aperto, senza confini, in cui le barriere scompaiono. Permette ai viaggiatori di evitare le insidie dei cambi d’ora per essere sempre un passo avanti. Dal momento stesso in cui mettono piede a terra, sono pronti a iniziare una nuova avventura."
        }
        button="BUY NOW"
      />
      <TextBlock
        title="ABOUT US"
        text="La nostra missione è creare orologi che non siano solo strumenti per misurare il tempo, ma veri e propri capolavori che riflettono il vostro stile e la vostra personalità"
        backgroundColor="#28282b"
      />
      <RowProducts />
    </>
  );
}
