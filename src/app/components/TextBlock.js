"use client";

import styled from "styled-components";
import { NeutralFace, NeutralFaceBold } from "../components/fonts";

const StyledTextBlock = styled.div`
  padding: 100px 50px;
  background-color: ${(props) => props.backgroundColor};

  .text-block-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  p {
    font-size: 1.35rem;
    line-height: 2.2;
  }
`;

export default function TextBlock({ title, text, backgroundColor }) {
  return (
    <StyledTextBlock
      className={`${NeutralFace.className}`}
      backgroundColor={backgroundColor}
      fontFamily={NeutralFace.className}
    >
      <div className="text-block-container">
        <h2 className={`${NeutralFaceBold.className}`}>{title}</h2>
        <p>{text}</p>
      </div>
    </StyledTextBlock>
  );
}
