import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(data: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (data !== undefined) {
      timerRef.current = setTimeout(() => {
        setDebouncedValue(data);
      }, delay);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [data, delay]);

  return debouncedValue;
}
