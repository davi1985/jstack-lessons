import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: 16px;
    }
  }
`;
