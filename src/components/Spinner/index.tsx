import { StyledSpinner } from "./styles";

type SpinnerProps = { size?: number };

export const Spinner = ({ size = 32 }: SpinnerProps) => (
  <StyledSpinner size={size} />
);
