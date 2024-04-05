import { Toast } from "../@types";
import { EventManager } from "../lib/EventManager";

type ToastProps = Omit<Toast, "id">;

export const toastEventManager = new EventManager();

export const toast = ({ type, text, duration }: ToastProps) => {
  toastEventManager.emit("addtoast", { type, text, duration });
};
