import { useQuery } from "@tanstack/react-query";

type todo = {
  id: string;
  title: string;
};

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok)
    throw new Error(response.statusText || "Error fetching data");

  return response.json();
};

const StaleTime = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
    staleTime: 5000,
  });

  if (error) return <p className="p-20 text-base">{error.message}</p>;

  const items: todo[] = data ? data.slice(0, 5) : [];

  return (
    <div className="p-20">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        items.map((item: todo) => (
          <p key={item.id}>
            {item.id}. {item.title}
          </p>
        ))
      )}
    </div>
  );
};

export default StaleTime;
