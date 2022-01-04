import styled from "styled-components";

const StyledSwipeButtons = styled.div`
  margin: 10px 0;
  bottom: 4vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  position: absolute;
  bottom: 150px;
  @media ${(props) => props.theme.breakpoints.m} {
    width: 20%;
  }
  @media ${(props) => props.theme.breakpoints.s} {
    width: 30%;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 40%;
  }
  @media ${(props) => props.theme.breakpoints.xxs} {
    width: 60%;
  }
`;

export default StyledSwipeButtons;
