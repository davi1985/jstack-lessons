import { Container } from "./styles";

import { Toast } from "../../../@types";
import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";
import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import { useToastMessage } from "./useToastMessage";

type ToastMessageProps = {
  message: Toast;
  onRemoveToast: (id: number) => void;
};

export const ToastMessage = ({
  message: { id, text, type, duration },
  onRemoveToast,
}: ToastMessageProps) => {
  const { handleRemoveToast } = useToastMessage({
    id,
    onRemoveToast,
    duration,
  });

  return (
    <Container
      type={type ?? "default"}
      tabIndex={0}
      role="button"
      onClick={handleRemoveToast}
    >
      {type === "danger" && <img src={xCircleIcon} />}
      {type === "success" && <img src={checkCircleIcon} />}

      <strong>{text}</strong>
    </Container>
  );
};
