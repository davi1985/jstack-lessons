import { useAnimationUnmount } from "../../hooks/useAnimationUnmount";
import { ReactPortal } from "../ReactPortal";
import { Spinner } from "../Spinner";
import { Overlay } from "./styles";

type LoaderProps = { isLoading: boolean };

export const Loader = ({ isLoading }: LoaderProps) => {
  const { shouldRender, animatedElementRef } = useAnimationUnmount({
    visibility: isLoading,
  });

  return shouldRender ? (
    <ReactPortal containerId={"loader-root"}>
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Overlay>
      ,
    </ReactPortal>
  ) : null;
};
