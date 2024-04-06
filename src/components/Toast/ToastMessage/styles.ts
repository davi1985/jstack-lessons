import styled, { css, keyframes } from "styled-components";
import { ToastVariant } from "../../../@types";

type ContainerPros = { type: ToastVariant; isLeaving: boolean };

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0%);
    
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

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
  animation: ${messageIn} 0.3s forwards;

  ${({ type }) => containerVariants[type] ?? containerVariants.default}

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${messageOut} 0.2s forwards;
    `}

  & + & {
    margin-top: 12px;
  }
`;
