import styled from "styled-components";

const H2 = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 122.02%;
  /* or 51px */

  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) => props.theme.colors.title};
`;

export default H2;
