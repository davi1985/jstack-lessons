import ToastMessage from "../ToastMessage";
import { Container } from "./styles";
import { useToastContainer } from "./useToastContainer";

export const ToastContainer = () => {
  const { renderList, handleRemoveItem } = useToastContainer();

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveItem}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
};
