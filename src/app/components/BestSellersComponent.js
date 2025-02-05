import styled from "styled-components";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";

const StyledBestSellers = styled.div`
  text-align: center;

  h2 {
    font-size: 4rem;
    border-top: 1px solid white;
    padding: 25px 0;
  }

  h3 {
    padding-left: 10px;
    width: 100%;
    text-align: left;
  }

  span {
    font-size: 1.2rem;
    padding-left: 10px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .container > *:not(:first-child) {
    border-left: 1px solid white;
  }

  .item {
    height: 600px;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
  }

  .item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the darkness */
    transition: background 0.3s ease-in;
    z-index: 1;
  }

  .item:hover:before {
    background: rgba(0, 0, 0, 0.2); /* Adjust the darkness */
  }

  .item > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;
    padding: 10px 0;
    border-top: 1px solid white;
    position: absolute;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }

  .item-1 {
    background-image: url("/products-img/oozoo-black/C11304-2.jpg");
  }

  .item-2 {
    background-image: url("/products-img/rolex-submariner/2110431_sw6_theme3_full.jpg");
  }

  .item-3 {
    background-image: url("/products-img/sky-dweller/sky-2.jpg");
  }

  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }

    .container > :not(:first-child) {
      border-left: none;
    }

    .item {
    }
  }
`;

export default function BestSellers() {
  return (
    <StyledBestSellers className={`${NeutralFace.className}`}>
      <h2>BEST SELLERS OF THE SEASON</h2>
      <div className="container">
        <a href="/products/oozoo-black" className="item item-1">
          <div>
            <h3>OOZOO BLACK STEEL</h3>
            <span>BUY NOW</span>
          </div>
        </a>
        <a href="/products/oozoo-black" className="item item-2">
          <div>
            <h3>ROLEX SUBMARINER</h3>
            <span>BUY NOW</span>
          </div>
        </a>
        <a href="/products/oozoo-black" className="item item-3">
          <div>
            <h3>ROLEX SKY DWELLER</h3>
            <span>BUY NOW</span>
          </div>
        </a>
      </div>
    </StyledBestSellers>
  );
}
