import { useEffect, useState } from "react";

type todo = {
  id: string;
  title: string;
};

const WithoutTanstackQuery = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState<todo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError((error as Error).message || "Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }, [id]);

  if (error) return <p className="p-20 text-base">{error}</p>;

  return (
    <div className="p-20">
      {isLoading || !data ? (
        <p className="text-base">Loading...</p>
      ) : (
        <p className="text-base">
          {data.id}. {data.title}
        </p>
      )}

      <div className="mt-4 flex max-w-xs gap-4">
        <button
          className="w-fit px-4 py-2 bg-black/10 rounded-lg mt-4 disabled:bg-black/5"
          disabled={id === 1}
          onClick={() => {
            if (id < 1) return;
            setId((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <button
          className="w-fit px-4 py-2 bg-black/10 rounded-lg mt-4"
          onClick={() => {
            setId((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WithoutTanstackQuery;
