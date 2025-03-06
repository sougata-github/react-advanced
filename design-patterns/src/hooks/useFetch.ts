import { useCallback, useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (url: string, signal: AbortSignal) => {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch(url, { signal });
      if (!response.ok) throw new Error(response.statusText);

      const data: T = await response.json();
      setData(data);
    } catch (err) {
      if (!signal.aborted)
        setError((err as Error).message || "An error occured");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!url) {
      setData(null);
      setError("");
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    fetchData(url, signal);

    return () => controller.abort();
  }, [fetchData, url]);

  return { data, error, isLoading };
}
