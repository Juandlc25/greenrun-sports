import styled from "styled-components";

const IconContainer = styled.div<{
  background?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  borderRadius?: string;
  boxShadow?: string;
  height?: string;
  width?: string;
}>`
  background: ${(props) =>
    props.background ? props.background : props.theme.colors.iconContainer};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "16px"};
  display: flex;
  flex-direction: center;
  align-items: center;
  padding: 19px 20px;
  cursor: pointer;
`;

export default IconContainer;
