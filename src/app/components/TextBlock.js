"use client";

import styled from "styled-components";
import {
  NeutralFace,
  NeutralFaceBold,
  CreatoDisplayLight,
} from "../components/fonts";

const StyledTextBlock = styled.div`
  padding: 100px 50px;
  background-color: ${(props) =>
    props.$backgroundColor}; // Use $ for transient props

  .text-block-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 25px;
  }
`;

export default function TextBlock({ title, text, backgroundColor }) {
  return (
    <StyledTextBlock
      className={`${CreatoDisplayLight.className}`}
      $backgroundColor={backgroundColor}
      fontFamily={CreatoDisplayLight.className}
    >
      <div className="text-block-container">
        <h2 className={`${NeutralFaceBold.className}`}>{title}</h2>
        <p>{text}</p>
      </div>
    </StyledTextBlock>
  );
}
