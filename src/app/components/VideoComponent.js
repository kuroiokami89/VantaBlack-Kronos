"use client";

import styled from "styled-components";
import { useState, useRef } from "react";
import { NeutralFace, NeutralFaceBold } from "./fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

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

  .mute-button {
    background: #080808;
    color: #faf9f6;
    border: solid 1px rgba(255, 255, 255, 0.25);
    cursor: pointer;
    z-index: 2;
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
`;

export default function Intro({
  height,
  video,
  title,
  subTitle,
  showMuteButton = true,
}) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <StyledVideoComponent
      id="intro"
      height={height}
      className={`borders ${NeutralFaceBold.className}`}
    >
      <video id="intro-video" autoPlay muted={isMuted} loop ref={videoRef}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content blocco">
        <h1>{title}</h1>
        <span className={`content-span ${NeutralFace.className}`}>
          {subTitle}
        </span>
        {showMuteButton && (
          <button
            className={`mute-button ${NeutralFace.className}`}
            onClick={toggleMute}
          >
            <FontAwesomeIcon
              className="mute-unmute-icons"
              icon={isMuted ? faVolumeXmark : faVolumeHigh}
            />
          </button>
        )}
      </div>
    </StyledVideoComponent>
  );
}
