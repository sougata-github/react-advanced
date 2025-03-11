import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
      ) {
        callback();
      }
    };

    window.addEventListener("click", handleClick, true);

    return () => window.removeEventListener("click", handleClick);
  }, [callback]);

  return ref;
}
