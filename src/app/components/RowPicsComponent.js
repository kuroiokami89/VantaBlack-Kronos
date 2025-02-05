import styled from "styled-components";

const StyledRowPicsComponent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: white 1px solid;
  border-top: white 1px solid;
  flex: 0 0 70%;

  img {
    flex: 0 0 33, 33%;
    width: 33, 33%;
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 50px 0;
    border-right: 0;
    flex: unset;
  }
`;

export default function RowPicsComponent({ pic1, pic2, pic3 }) {
  return (
    <StyledRowPicsComponent className="row-pics-container">
      <img src={pic1} alt="Picture 1" />
      <img src={pic2} alt="Picture 2" />
      <img src={pic3} alt="Picture 3" />
    </StyledRowPicsComponent>
  );
}
