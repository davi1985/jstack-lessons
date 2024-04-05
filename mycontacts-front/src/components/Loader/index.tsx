import { ReactPortal } from "../ReactPortal";
import { Spinner } from "../Spinner";
import { Overlay } from "./styles";

type LoaderProps = { isLoading: boolean };

export const Loader = ({ isLoading }: LoaderProps) =>
  isLoading ? (
    <ReactPortal containerId={"loader-root"}>
      <Overlay>
        <Spinner size={90} />
      </Overlay>
      ,
    </ReactPortal>
  ) : null;
