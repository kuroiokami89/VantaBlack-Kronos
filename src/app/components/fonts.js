import localFont from "next/font/local";

/* FONT PER TITOLI */
const NeutralFaceBold = localFont({
  src: "../fonts/NeutralFaceBold.ttf",
});

/* FONT PER SOTTOTITOLI ,CERTI TESTI E LINKS */
const NeutralFace = localFont({
  src: "../fonts/NeutralFace.ttf",
});

/* FONT PER TESTI E LISTE E TESTI */
const CreatoDisplayLight = localFont({
  src: "../fonts/CreatoDisplay-Light.otf",
});

export { NeutralFace, NeutralFaceBold, CreatoDisplayLight };
