import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #222;
    font-family: sans-serif;
    color: #f2f2f2
  }

  button {
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 10px;
    margin-left: 5px
  }
`;
