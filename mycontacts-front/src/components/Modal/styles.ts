import styled, { keyframes } from "styled-components";

type ContainerStyleProps = { danger: boolean };

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
`;

export const Container = styled.div<ContainerStyleProps>`
  max-width: 450px;
  width: 100%;
  padding: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.defaultBoxShadow};
  animation: ${scaleIn} 0.3s;

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.gray[900]};
  }

  .modal-body {
    margin-top: 2rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray["200"]};
    margin-right: 24px;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
