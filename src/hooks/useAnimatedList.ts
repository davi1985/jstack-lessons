import {
  MutableRefObject,
  useCallback,
  useRef,
  useState,
  createRef,
  useEffect,
} from "react";
import { Toast } from "../@types";

type Item = Toast;
type ComponentProps = {
  isLeaving: boolean;
  animatedRef: MutableRefObject<HTMLDivElement | null>;
};

type RenderItemFunction = (
  item: Item,
  { isLeaving, animatedRef }: ComponentProps
) => React.ReactNode;

export const useAnimatedList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState<
    number[]
  >([]);

  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  const handleAnimationEnd = useCallback((itemId: number) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();

    animatedRefs.current.delete(itemId);
    animationEndListeners.current.delete(itemId);

    setItems((prevState) => prevState.filter(({ id }) => id !== itemId));

    setPendingRemovalItemsIds((prevState) =>
      prevState.filter((id) => id !== itemId)
    );
  }, []);

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const animatedElement = animatedRef?.current;
      const alreadyHasListener = animationEndListeners.current.has(itemId);

      if (animatedElement && !alreadyHasListener) {
        const onAnimationEnd = () => handleAnimationEnd(itemId);
        const removeListener = () => {
          console.log("remove");
          animatedElement.removeEventListener("animationend", onAnimationEnd);
        };

        animatedElement.addEventListener("animationend", onAnimationEnd);
        animationEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [handleAnimationEnd, pendingRemovalItemsIds]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  const handleRemoveItem = useCallback(
    (id: number) =>
      setPendingRemovalItemsIds((prevState) => [...prevState, id]),
    []
  );

  const getAnimatedRef = useCallback((itemId: number) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback(
    (renderItem: RenderItemFunction) =>
      items.map((item) => {
        const animatedRef = getAnimatedRef(item.id);

        return renderItem(item, {
          isLeaving: pendingRemovalItemsIds.includes(item.id),
          animatedRef,
        });
      }),
    [getAnimatedRef, items, pendingRemovalItemsIds]
  );

  return {
    items,
    setItems,
    renderList,
    handleRemoveItem,
  };
};
