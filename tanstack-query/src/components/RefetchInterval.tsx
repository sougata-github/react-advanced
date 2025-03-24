import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type todo = {
  id: string;
  title: string;
};

const fetchData = async (currentId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${currentId}`
  );
  if (!response.ok) throw new Error(response.statusText);

  return response.json();
};

const RefetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);

  const { data, error, isLoading } = useQuery<todo>({
    queryKey: ["todo", currentId],
    queryFn: () => fetchData(currentId),
    refetchInterval: 5000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prev) => (prev < 200 ? prev + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (error) return <p className="p-20 text-base">{error.message}</p>;

  return (
    <div className="p-20">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {data?.id}. {data?.title}
        </p>
      )}
      <div className="flex mt-4 gap-4">
        <button
          className="w-fit px-4 py-2 bg-black/10 rounded-lg mt-4 disabled:bg-black/5"
          disabled={currentId === 1}
          onClick={() => {
            if (currentId < 1) return;
            setCurrentId((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <button
          className="w-fit px-4 py-2 bg-black/10 rounded-lg mt-4"
          disabled={currentId === 200}
          onClick={() => {
            setCurrentId((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RefetchInterval;
