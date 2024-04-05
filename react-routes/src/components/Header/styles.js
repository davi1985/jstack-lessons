import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.large}px;
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-content: space-between;

  button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
