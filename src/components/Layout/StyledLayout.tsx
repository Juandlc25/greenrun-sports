import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media ${(props) => props.theme.breakpoints.m} {
    padding: 20px;
  }
  @media ${(props) => props.theme.breakpoints.s} {
    padding: 20px;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 20px;
  }
  @media ${(props) => props.theme.breakpoints.xxs} {
    padding: 20px;
  }
`;

export const StyledLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default StyledLayout;
