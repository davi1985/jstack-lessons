import { MutableRefObject, memo } from "react";
import { Container } from "./styles";

import { Toast } from "../../../@types";
import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";
import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import { useToastMessage } from "./useToastMessage";

type ToastMessageProps = {
  message: Toast;
  onRemoveToast: (id: number) => void;
  isLeaving: boolean;
  animatedRef: MutableRefObject<HTMLDivElement | null>;
};

const ToastMessage = ({
  message: { id, text, type, duration },
  onRemoveToast,
  isLeaving,
  animatedRef,
}: ToastMessageProps) => {
  const { handleRemoveToast } = useToastMessage({
    id,
    duration,
    onRemoveToast,
  });

  return (
    <Container
      ref={animatedRef}
      isLeaving={isLeaving}
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

export default memo(ToastMessage);
