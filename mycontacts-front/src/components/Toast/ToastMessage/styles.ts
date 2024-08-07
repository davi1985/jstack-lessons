import styled, { css } from "styled-components";
import { ToastVariant } from "../../../@types";

type ContainerPros = { type: ToastVariant };

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
};

export const Container = styled.div<ContainerPros>`
  padding: 16px 32px;
  color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  ${({ type }) => containerVariants[type] ?? containerVariants.default}

  & + & {
    margin-top: 12px;
  }
`;
