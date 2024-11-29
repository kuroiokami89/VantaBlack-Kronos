"use client";

import styled from "styled-components";
import { NeutralFace } from "./fonts";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledBrandsRow = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: solid white 1px;
  border-top: solid white 1px;

  h2 {
    margin-bottom: 100px;
  }

  img {
    width: 200px;
    height: auto;
  }

  .slick-slider {
    width: 100%; /* Ensures the slider takes the full width */
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Hide arrows and other unnecessary elements */
  .slick-prev,
  .slick-next {
    display: none !important;
  }

  /* Hide dots if needed */
  .slick-dots {
    display: none;
  }
`;

export default function BrandsRow() {
  const settings = {
    dots: false, // Hide pagination dots
    infinite: true, // Enable looping
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide navigation buttons
    centerMode: false, // Disable centering if not needed
  };

  return (
    <StyledBrandsRow
      id="brands-row"
      className={`borders ${NeutralFace.className}`}
    >
      <h2 className={`${NeutralFace.className}`}>OUR BUSINESS PARTNERS</h2>
      <Slider {...settings}>
        <div>
          <img src="/brands/1.png" alt="Brand 1" />
        </div>
        <div>
          <img src="/brands/2.png" alt="Brand 2" />
        </div>
        <div>
          <img src="/brands/3.png" alt="Brand 3" />
        </div>
        <div>
          <img src="/brands/4.png" alt="Brand 4" />
        </div>
        <div>
          <img src="/brands/1.png" alt="Brand 1" />
        </div>
        <div>
          <img src="/brands/2.png" alt="Brand 2" />
        </div>
        <div>
          <img src="/brands/3.png" alt="Brand 3" />
        </div>
        <div>
          <img src="/brands/4.png" alt="Brand 4" />
        </div>
      </Slider>
    </StyledBrandsRow>
  );
}
