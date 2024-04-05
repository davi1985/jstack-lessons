import { ReactNode } from "react";

import { Button } from "../Button";
import { ReactPortal } from "../ReactPortal";

import { Container, Footer, Overlay } from "./styles";

type ModalProps = {
  danger?: boolean;
  visibility: boolean;
  isLoading?: boolean;
  title: string;
  children: ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const Modal = ({
  visibility,
  danger = false,
  title,
  children,
  cancelLabel = "Cancelar",
  confirmLabel = "Confirmar",
  onCancel,
  onConfirm,
  isLoading = false,
}: ModalProps) =>
  visibility ? (
    <ReactPortal containerId={"modal-root"}>
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>

            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  ) : null;
