"use client";

import { useState, useEffect } from "react";
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

  .top {
    width: 100%;
    display: flex;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  .filters {
    width: 100%;
    padding: 30px;
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    gap: 30px;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
  }

  .filter-group label {
    font-size: 0.9rem;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .filter-group select,
  .filter-group input {
    padding: 12px 15px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: white;
    font-family: inherit;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .filter-group select:hover,
  .filter-group input:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }

  .filter-group select:focus,
  .filter-group input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.15);
  }

  .filter-group input[type="number"] {
    width: 150px;
  }

  .price-inputs {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .filter-actions {
    display: flex;
    gap: 15px;
    margin-left: auto;
  }

  .reset-btn {
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: white;
    font-family: inherit;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .reset-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }

  .results-info {
    padding: 20px 30px;
    font-size: 1.1rem;
    opacity: 0.8;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    box-sizing: border-box;
  }

  .container > div {
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    border-right: 1px solid rgba(255, 255, 255, 0.25);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  /* Hover Effects */
  .container > div:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: 10;
    border-color: rgba(255, 255, 255, 0.4);
  }

  .container > div::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: left 0.6s ease;
  }

  .container > div:hover::before {
    left: 100%;
  }

  .container > div:nth-child(3n) {
    border-right: none;
  }

  .no-results {
    grid-column: 1 / -1;
    padding: 60px 30px;
    text-align: center;
    font-size: 1.5rem;
    opacity: 0.6;
  }

  @media screen and (max-width: 1450px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }

    .container > div:nth-child(3n) {
      border-right: 1px solid rgba(255, 255, 255, 0.25);
    }

    .container > div:nth-child(2n) {
      border-right: none;
    }

    .container > div:hover:nth-child(2n) {
      border-right: none;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding: 25px 15px;
      font-size: 3rem;
    }

    .filters {
      padding: 20px 15px;
      flex-direction: column;
      align-items: stretch;
    }

    .filter-group {
      min-width: 100%;
    }

    .filter-actions {
      margin-left: 0;
      margin-top: 10px;
    }

    .price-inputs {
      flex-direction: column;
      align-items: stretch;
    }

    .filter-group input[type="number"] {
      width: 100%;
    }

    .results-info {
      padding: 15px;
    }

    .container {
      grid-template-columns: 1fr;
    }

    .container > div {
      border-right: none;
    }

    .container > div:nth-child(2n) {
      border-right: none;
    }

    .container > div:hover {
      transform: translateY(-4px);
    }

    .top {
      flex-direction: column;
    }
  }
`;

export default function Shop() {
  const [shopItems, setShopItems] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid data format");
        setShopItems(data);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setShopItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const resetFilters = () => {
    setSelectedBrand("all");
    setMinPrice("");
    setMaxPrice("");
  };

  const brands = ["all", ...new Set(shopItems.map((item) => item.brand))];

  const filteredItems = shopItems.filter((item) => {
    const matchesBrand =
      selectedBrand === "all" || item.brand === selectedBrand;

    const min = minPrice === "" ? 0 : Number(minPrice);
    const max = maxPrice === "" ? Infinity : Number(maxPrice);

    return matchesBrand && item.price >= min && item.price <= max;
  });

  return (
    <StyledShop id="shop" className={`borders ${NeutralFace.className}`}>
      <div className="top">
        <h1>SHOP</h1>
      </div>

      {/* <div className="filters">
        <div className="filter-group">
          <label>Brand</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand === "all" ? "All Brands" : brand}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Price Range</label>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Min ($)"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max ($)"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-actions">
          <button className="reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div> */}

      <div className="results-info">
        {loading
          ? "Loading products..."
          : `Showing ${filteredItems.length} of ${shopItems.length} watches`}
      </div>

      <div className="container">
        {!loading && filteredItems.length === 0 ? (
          <div className="no-results">
            No watches found matching your filters.
          </div>
        ) : (
          filteredItems.map((item) => (
            <ShopItem
              key={item.id}
              link={`/products/${item.slug}`} // Match ShopItem's prop name
              imgClass={item.thumbnail} // Match ShopItem's prop name
              brand={item.brand}
              model={item.model}
              price={`${item.price.toLocaleString()} $`}
            />
          ))
        )}
      </div>

      <ContactForm />
    </StyledShop>
  );
}
