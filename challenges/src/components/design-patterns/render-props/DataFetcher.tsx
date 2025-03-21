import React, { useEffect, useState } from "react";

interface Props<T> {
  url: string;
  render: (data: T) => React.ReactNode;
}

const DataFetcher = <T,>({ url, render }: Props<T>) => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!url) {
      setData(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response?.statusText);

        const data = await response.json();

        setData(data);
      } catch (error) {
        setError((error as Error).message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  if (!data || isLoading)
    return (
      <div className="p-20">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-20">
        <p>{error}</p>;
      </div>
    );

  return (
    <div className="p-20">
      {data.map((user, index) => (
        <React.Fragment key={index}>{render(user)}</React.Fragment>
      ))}
    </div>
  );
};

export default DataFetcher;
