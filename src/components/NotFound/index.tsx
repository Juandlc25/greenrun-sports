import { ReactElement } from "react";
import styled from "styled-components";
import H2 from "../Typography/H2";
import img from "../../assets/img/not-found.png";

const NotFound = (): ReactElement => {
  return (
    <NotFoundContainer>
      <H2>404</H2>
      <img src={img} alt="not-found" />
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0 5.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 400px;
    margin-top: 20px;
  }
  @media ${(props) => props.theme.breakpoints.s} {
    img {
      height: 200px;
    }
  }
  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default NotFound;
