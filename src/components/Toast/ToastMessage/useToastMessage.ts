import { useEffect } from "react";

const DEFAULT_TIME_TO_REMOVE_TOAST = 5000;

type Props = {
  id: number;
  duration?: number;
  onRemoveToast: (arg: number) => void;
};

export const useToastMessage = ({ id, duration, onRemoveToast }: Props) => {
  // const animatedElementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveToast(id);
    }, duration || 7000);

    // component desmonta
    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration, id, onRemoveToast]);

  const handleRemoveToast = () => {
    onRemoveToast(id);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => onRemoveToast(id),
      duration || DEFAULT_TIME_TO_REMOVE_TOAST
    );

    return () => clearTimeout(timeoutId);
  }, [duration, id, onRemoveToast]);

  return { handleRemoveToast };
};
