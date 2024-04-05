import { SelectHTMLAttributes } from "react";
import styled from "styled-components";

type SelectStyleProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = styled.select<SelectStyleProps>`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  height: 52px;
  border: 2px solid #fff;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  .select-title {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    opacity: 0.85;
  }
`;
