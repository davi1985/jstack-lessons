import { useEffect } from "react";

import { ListenerPayload } from "../../../@types";
import { useAnimatedList } from "../../../hooks/useAnimatedList";
import { toastEventManager } from "../../../utils/toast";

export const useToastContainer = () => {
  const {
    renderList,
    setItems: setToasts,
    handleRemoveItem,
  } = useAnimatedList();

  useEffect(() => {
    const handleAddToast = ({ type, text, duration }: ListenerPayload) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        { id: Math.random(), type, text, duration },
      ]);
    };

    toastEventManager.on("addtoast", handleAddToast);

    return () => toastEventManager.removeListener("addtoast", handleAddToast);
  }, [setToasts]);

  return {
    renderList,
    handleRemoveItem,
  };
};
