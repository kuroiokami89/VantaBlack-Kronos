"use client";

import styled from "styled-components";
import { NeutralFace, NeutralFaceBold } from "./fonts";

const StyledVideoComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  #intro-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    margin-bottom: 0 !important;
  }

  .content-span {
    margin-top: 25px;
    font-size: 1.3rem;
  }
`;

export default function Intro({ height, video, title, subTitle }) {
  return (
    <StyledVideoComponent
      id="intro"
      height={height}
      className={`${NeutralFaceBold.className}`}
    >
      <video id="intro-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content blocco">
        <h1>{title}</h1>
        <span className={`content-span ${NeutralFace.className}`}>
          {subTitle}
        </span>
      </div>
    </StyledVideoComponent>
  );
}
