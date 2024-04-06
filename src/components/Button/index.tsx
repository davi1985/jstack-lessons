import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";
import { Spinner } from "../Spinner";

type ButtonProps = {
  danger?: boolean;
  isLoading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  danger,
  isLoading,
  children,
  ...props
}: ButtonProps) => (
  <StyledButton
    danger={danger}
    isLoading={isLoading}
    disabled={props.disabled || isLoading}
    {...props}
  >
    {!isLoading && children}
    {isLoading && <Spinner size={16} />}
  </StyledButton>
);
