import { useCallback } from "react";
import { useIsMounted } from "./useIsMounted";

export const useSafeAsyncAction = () => {
  const isMounted = useIsMounted();

  const runSafeAsyncAction = useCallback(
    (callback: () => void) => isMounted() && callback(),
    [isMounted]
  );

  return runSafeAsyncAction;
};
