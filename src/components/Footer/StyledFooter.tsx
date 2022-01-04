import styled from "styled-components";

const StyledFooter = styled.div`
  width: 97.5%;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.footer};
  padding: 13px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  @media ${(props) => props.theme.breakpoints.m} {
    width: 96.5%;
  }
  @media ${(props) => props.theme.breakpoints.s} {
    width: 94.5%;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 92.5%;
  }
  @media ${(props) => props.theme.breakpoints.xxs} {
    width: 90.5%;
  }
`;

export default StyledFooter;
