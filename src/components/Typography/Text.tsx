import styled from "styled-components";
interface PType {
  margin?: string;
  color?: string;
}

const Text = styled.p<PType>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 148.02%;
  /* or 27px */
  margin: ${(props) => (props.margin ? props.margin : "0")};
  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) =>
    props.color ? props.color : props.theme.colors.subtitle};

  opacity: 0.8;
  a {
    margin-left: 5px;
  }
`;

export default Text;
