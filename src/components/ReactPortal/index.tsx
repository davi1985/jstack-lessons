import { ReactNode } from "react";
import ReactDOM from "react-dom";

type ReactPortalProps = {
  containerId: string;
  children: ReactNode;
};

export const ReactPortal = ({ containerId, children }: ReactPortalProps) => {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
};
