import { ToastMessage } from "../ToastMessage";
import { Container } from "./styles";
import { useToastContainer } from "./useToastContainer";

export const ToastContainer = () => {
  const { toasts, handleRemoveToast } = useToastContainer();

  return (
    <Container>
      {toasts.map(({ id, ...message }) => (
        <ToastMessage
          key={id}
          message={{ id, ...message }}
          onRemoveToast={handleRemoveToast}
        />
      ))}
    </Container>
  );
};
