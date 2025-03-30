import { useQuery } from "@tanstack/react-query";

export function useTodo(id: string) {
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (!response.ok)
      throw new Error(response.statusText || "Error fetching data");

    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["todo", id],
    queryFn: fetchData,
  });

  return { data, isLoading, error };
}
