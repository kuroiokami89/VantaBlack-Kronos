"use client";

import { useState } from "react";
import ShopItem from "./ShopItem";
import { NeutralFace } from "../components/fonts";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

const StyledShop = styled.div`
  padding-top: 75px;

  h1 {
    padding: 25px 30px;
    font-size: 4rem;
  }

  .filters {
    padding: 20px 30px;
    display: flex;
    gap: 80px;
    align-items: center;
  }

  .filters label {
    font-size: 1rem;
  }

  .filters select,
  .filters input {
    padding: 5px 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .top {
    width: 100%;
    display: flex;
    border-top: 1px solid white;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    border-top: 1px solid #fff;
    box-sizing: border-box;
  }

  .container > div {
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  /* Remove the right border for the last item in each row */
  .container > div:nth-child(3n) {
    border-right: none;
  }

  /* Remove the bottom border for the last row */
  .container > div:nth-last-child(-n + 3) {
    border-bottom: none;
  }

  .filters input,
  .filters select,
  .filters option {
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #fff;
    border-radius: 0;
    color: white;
    background: black;
  }

  @media screen and (max-width: 900px) {
    .container > div {
      width: 100%;
      border-right: none;
    }

    .container > div:nth-last-child(-n + 1) {
      border-bottom: none;
    }
  }

  @media screen and (max-width: 1450px) {
    .container > div {
      width: calc(50% - 1px); /* Adjust the width for smaller screens */
      box-sizing: border-box;
    }

    .container > div:nth-child(3n) {
      border-right: 1px solid white;
    }

    .container > div:nth-last-child(-n + 3) {
      border-bottom: 1px solid white;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      border-bottom: 1px solid white;
    }

    .container {
      justify-content: space-around;
    }

    .container > div {
      width: calc(100% - 1px); /* Adjust the width for smaller screens */
      box-sizing: border-box;
    }

    .container > div:nth-child(3n) {
      border-right: none;
    }

    .top,
    .filters {
      flex-direction: column;
    }

    .filters {
      gap: 40px;
      align-items: baseline;
    }
  }
`;

const shopItems = [
  {
    link: "/products/rolex-sky-dweller",
    imgClass: "/products-img/sky-dweller/sky-min.png",
    brand: "Rolex",
    model: "Sky Dweller",
    price: 10000,
  },
  {
    link: "/products/omega-seamaster",
    imgClass: "/products-img/omega-seamaster/omega-seamaster-aqua-terra.png",
    brand: "Omega",
    model: "Sea Master Acqua terra",
    price: 7000,
  },
  {
    link: "/products/oozoo-black",
    imgClass: "/products-img/oozoo-black/OOZOO.png",
    brand: "Oozoo",
    model: "C11412",
    price: 100,
  },
  {
    link: "/products/rolex-submariner",
    imgClass: "/products-img/rolex-submariner/Rolex.png",
    brand: "Rolex",
    model: "Submariner",
    price: 100,
  },
  {
    link: "/product",
    imgClass: "/products-img/rolex-submariner/Rolex.png",
    brand: "Rolex",
    model: "Vantablack Model",
    price: 10000,
  },
  {
    link: "/product",
    imgClass: "/products-img/rolex-submariner/Rolex.png",
    brand: "Rolex",
    model: "Vantablack Model",
    price: 10000,
  },
];

export default function Shop() {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  const filteredItems = shopItems.filter((item) => {
    const matchesBrand =
      selectedBrand === "all" || item.brand === selectedBrand;
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    return matchesBrand && matchesPrice;
  });

  return (
    <StyledShop id="shop" className={`borders ${NeutralFace.className}`}>
      <div className="top">
        <h1>SHOP</h1>
        <div className={`filters ${NeutralFace.className}`}>
          <div>
            <label htmlFor="brand-select">Filter by Brand: </label>
            <select
              id="brand-select"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="all">All</option>
              <option value="Rolex">Rolex</option>
              <option value="Omega">Omega</option>
              <option value="Oozoo">Oozoo</option>
            </select>
          </div>
          <div>
            <label htmlFor="min-price">Min Price: </label>
            <input
              id="min-price"
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              min="0"
              max={maxPrice}
            />
          </div>
          <div>
            <label htmlFor="max-price">Max Price: </label>
            <input
              id="max-price"
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              min={minPrice}
              max="100000"
            />
          </div>
        </div>
      </div>
      <div className="container">
        {filteredItems.map((item, index) => (
          <ShopItem
            key={index}
            link={item.link}
            imgClass={item.imgClass}
            brand={item.brand}
            model={item.model}
            price={`${item.price.toLocaleString()} $`}
          />
        ))}
      </div>
      <ContactForm />
    </StyledShop>
  );
}
