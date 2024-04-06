import { ReactNode } from "react";
import { Spinner } from "../Spinner";
import { Container } from "./styles";

type FormGroupProps = {
  children: ReactNode;
  error?: string;
  isLoading?: boolean;
};

export const FormGroup = ({
  children,
  error,
  isLoading = false,
}: FormGroupProps) => (
  <Container>
    <div className="form-item">
      {children}

      {isLoading && (
        <div className="loader">
          <Spinner size={16} />
        </div>
      )}
    </div>

    {error && <small>{error}</small>}
  </Container>
);
