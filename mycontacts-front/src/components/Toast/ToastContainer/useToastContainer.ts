import { useState, useEffect, useCallback } from "react";
import { Toast, ListenerPayload } from "../../../@types";
import { toastEventManager } from "../../../utils/toast";

export const useToastContainer = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleAddToast = ({ type, text, duration }: ListenerPayload) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        { id: Math.random(), type, text, duration },
      ]);
    };

    toastEventManager.on("addtoast", handleAddToast);

    return () => toastEventManager.removeListener("addtoast", handleAddToast);
  }, []);

  const handleRemoveToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    handleRemoveToast,
  };
};
