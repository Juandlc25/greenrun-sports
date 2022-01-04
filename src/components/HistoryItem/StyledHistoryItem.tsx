import styled from "styled-components";

const StyledHistoryItem = styled.div`
  border-radius: 12px;
  background-color: #ffffff;
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Img = styled.div<{ backgroundImage: string }>`
  border-radius: 12px;
  width: 90%;
  @media ${(props) => props.theme.breakpoints.m} {
    width: 88%;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 86%;
  }
  @media ${(props) => props.theme.breakpoints.xxs} {
    width: 84%;
  }
  height: 100%;
  background-position: center;
  object-fit: fill;
  background-image: ${(props) =>
    props.backgroundImage && props.backgroundImage};
  display: flex;
  align-items: center;
  padding: 20px;
`;

export default StyledHistoryItem;
