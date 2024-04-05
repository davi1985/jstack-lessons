import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray["900"]};
  }

  button {
    cursor: pointer
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary.light};
    -webkit-border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary.light};
    -webkit-border-radius: 4px;
  }
`;
