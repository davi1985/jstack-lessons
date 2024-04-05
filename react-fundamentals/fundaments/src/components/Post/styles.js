import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  /* opacity: ${(props) => (props.read ? 0.5 : 1)}; */

  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
  `}
`;

export const Article = styled.article``;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.8;
`;
