import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import styled from "styled-components";
import ShopItem2 from "../components/ShopItem2";

// Constants for repeated values
const BORDER_COLOR = "white";
const SHOP_ITEM_PADDING = "70px";
const SHOP_ITEM_HEIGHT = "650px";
const SHOP_ITEM_WIDTH = "630px";
const SHOP_ITEM_IMAGE_WIDTH = "240px";
const SHOP_ITEM_DETAILS_MARGIN_TOP = "45px";
const FONT_SIZE_LARGE = "1.5rem";
const FONT_SIZE_MEDIUM = "1.2rem";

const StyledRowProducts = styled.div`
  h2 {
    text-align: center;
    padding: 25px 0;
    font-size: 4rem;
    border-top: 1px solid ${BORDER_COLOR};
    border-left: 1px solid ${BORDER_COLOR};
    margin-bottom: 0;
  }

  #row-products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid ${BORDER_COLOR};
  }

  .shop-item {
    height: ${SHOP_ITEM_HEIGHT};
    width: ${SHOP_ITEM_WIDTH};
    padding: ${SHOP_ITEM_PADDING};
    border-bottom: 1px solid ${BORDER_COLOR};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:nth-child(3n) {
      border-right: none;
    }

    &:first-child {
      border-left: 1px solid ${BORDER_COLOR};
    }

    &:nth-last-child(-n + 3) {
      border-bottom: none;
    }
  }

  .shop-item-image {
    width: ${SHOP_ITEM_IMAGE_WIDTH};
  }

  .shop-item-details {
    text-align: center;
    margin-top: ${SHOP_ITEM_DETAILS_MARGIN_TOP};
  }

  .shop-item-brand {
    font-size: ${FONT_SIZE_LARGE};
    font-weight: bold;
  }

  .shop-item-model {
    font-size: ${FONT_SIZE_MEDIUM};
    color: #ccc;
  }

  .shop-item-price {
    font-size: ${FONT_SIZE_LARGE};
    font-weight: bold;
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      border-right: 1px solid ${BORDER_COLOR};
      margin-bottom: 0 !important;
    }

    #row-products-container {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .shop-item {
      padding: 30px;
      width: 100%;
      border-right: 1px solid ${BORDER_COLOR};

      &:nth-last-child(-n + 3) {
        border-bottom: 1px solid ${BORDER_COLOR};
      }

      &:nth-child(3n) {
        border-bottom: none;
      }
    }
  }
`;

export default function RowProducts() {
  return (
    <StyledRowProducts className={`${NeutralFace.className}`}>
      <h2>BEST SELLERS</h2>
      <div id="row-products-container">
        <ShopItem2
          link="/products/oozoo-black"
          imgClass="/products-img/oozoo-black/OOZOO.png"
          brand="Black Steel"
          model="C11412"
          price="100 £"
        />
        <ShopItem2
          link="/products/oozoo-black"
          imgClass="/products-img/oozoo-black/OOZOO.png"
          brand="Black Steel"
          model="C11412"
          price="100 £"
        />
        <ShopItem2
          link="/products/oozoo-black"
          imgClass="/products-img/oozoo-black/OOZOO.png"
          brand="Black Steel"
          model="C11412"
          price="100 £"
        />
      </div>
    </StyledRowProducts>
  );
}
