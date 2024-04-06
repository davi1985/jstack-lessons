import { ListenerPayload } from "../@types";

type Listener = ({ type, text, duration }: ListenerPayload) => void;

export class EventManager {
  private listeners;

  constructor() {
    this.listeners = new Map<string, Listener[]>();
  }

  on(event: string, listener: Listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event)!.push(listener);
  }

  emit(event: string, { type, text, duration }: ListenerPayload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event)!.forEach((listener) => {
      listener({ type, text, duration });
    });
  }

  removeListener(event: string, listenerToRemove: Listener) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove
    );

    this.listeners.set(event, filteredListeners);
  }
}
