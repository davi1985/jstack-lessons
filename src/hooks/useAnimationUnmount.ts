import { useState, useRef, useEffect } from "react";

type Props = {
  visibility: boolean;
};

export const useAnimationUnmount = ({ visibility }: Props) => {
  const [shouldRender, setShouldRender] = useState(visibility);
  const animatedElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibility) {
      setShouldRender(true);
    }

    const animationEnd = () => setShouldRender(false);
    const elementRef = animatedElementRef.current;

    if (!visibility && elementRef) {
      elementRef.addEventListener("animationend", animationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener("animationend", animationEnd);
      }
    };
  }, [visibility]);

  return { shouldRender, animatedElementRef };
};
