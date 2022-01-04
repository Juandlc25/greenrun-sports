import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{
  theme: {
    fonts: any;
    colors: any;
    animations: any;
    shadows: any;
  };
}>`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }
  
  body {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
