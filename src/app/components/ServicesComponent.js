import styled from "styled-components";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";

const StyledServices = styled.div`
  text-align: center;

  h2 {
    font-size: 4rem;
    padding: 30px 0;
    border-bottom: 1px solid white;
  }

  p {
    font-size: 1.05rem;
    line-height: 2;
  }

  .services-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .service {
    padding: 0 50px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

  .services-container > *:not(:first-child) {
    border-left: 1px solid white;
  }

  .service img {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    .services-container {
      grid-template-columns: repeat(1, 1fr);
    }

    .service {
      border-left: none;
      border-right: none;
      border-bottom: 1px solid white;
    }

    .services-container > *:not(:first-child) {
      border-left: none;
      border-right: none;
    }

    .service:last-child {
      border-bottom: none;
    }
  }
`;

export default function Services() {
  return (
    <StyledServices className={`${NeutralFace.className}`}>
      <h2>OUR SERVICES</h2>
      <div className={`services-container ${NeutralFace.className}`}>
        <div className="service">
          <img src="/Warranty Logo1.svg" alt="Warranty" />
          <h3>2 year Warranty</h3>
          <p>
            We give a two-year warranty on all our watches. Brand new watches
            will be covered by their manufacturers warranty.
          </p>
        </div>
        <div className="service">
          <img src="/Cart icon 1.svg" alt="Shipping" />
          <h3>Free shipping & returns</h3>
          <p>
            Enjoy free next-day UK delivery and worldwide shipping. Return any
            watch in its original condition within 14 days.
          </p>
        </div>
        <div className="service">
          <img src="/Gear Icon.svg" alt="Gear" />
          <h3>Watch Customizations</h3>
          <p>
            If you're unable to visit our boutique, we also offer a free
            collection service to have your watch appraised.
          </p>
        </div>
      </div>
    </StyledServices>
  );
}
