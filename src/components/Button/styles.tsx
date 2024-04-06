import styled, { css } from "styled-components";

type ButtonStyleProps = {
  danger?: boolean;
  isLoading?: boolean;
};

export const StyledButton = styled.button<ButtonStyleProps>`
  padding: 0 16px;
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]};
    cursor: default !important;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;
