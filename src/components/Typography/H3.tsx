import styled from "styled-components";
interface H3Type {
  color?: string;
}
const H3 = styled.h3<H3Type>`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 122.02%;
  /* or 34px */

  color: ${(props) => (props.color ? props.color : props.theme.colors.title)};
  /* or 51px */

  display: flex;
  align-items: center;
  text-align: center;
`;

export default H3;
