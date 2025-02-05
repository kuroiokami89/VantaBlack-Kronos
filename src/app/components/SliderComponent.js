import { NeutralFace, NeutralFaceBold } from "../components/fonts";
import styled from "styled-components";

// Define keyframes outside of the styled component
const slideAnimation = `
  @keyframes slides {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const StyledSlider = styled.div`
  ${slideAnimation}

  h2 {
    padding: 30px 0;
    border-top: 1px solid white;
    text-align: center;
    font-size: 4rem;
  }

  .logos {
    overflow: hidden;
    padding: 30px 0px;
    white-space: nowrap;
    position: relative;
    padding: 60px 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  .logos:before {
    left: 0;
  }

  .logos:after {
    right: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255)
    );
  }

  .logo_items {
    display: inline-block;
    animation: 70s slides infinite linear;
  }

  .logos:hover .logo_items {
    animation-play-state: paused;
  }

  .logo_items img {
    height: 100px;
    margin-right: 200px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin-bottom: 0;
    }
  }
`;

export default function Slider() {
  const logoImages = [
    "/brands/1.png",
    "/brands/2.png",
    "/brands/3.png",
    "/brands/4.png",
    "/brands/1.png",
    "/brands/2.png",
    "/brands/3.png",
    "/brands/4.png",
    "/brands/1.png",
    "/brands/2.png",
    "/brands/3.png",
    "/brands/4.png",
    "/brands/1.png",
    "/brands/2.png",
    "/brands/3.png",
    "/brands/4.png",
    "/brands/1.png",
    "/brands/2.png",
    "/brands/3.png",
    "/brands/4.png",
  ];

  return (
    <StyledSlider className={`${NeutralFace.className}`}>
      <h2>OUR PARTNERS</h2>
      <div className="logos">
        <div className="logo_items">
          {logoImages.map((src, index) => (
            <img key={index} src={src} alt={`logo-${index}`} />
          ))}
        </div>
        <div className="logo_items">
          {logoImages.map((src, index) => (
            <img key={index} src={src} alt={`logo-${index}`} />
          ))}
        </div>
      </div>
    </StyledSlider>
  );
}
