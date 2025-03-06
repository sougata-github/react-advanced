import { useFetch } from "../../hooks/useFetch";

interface Todo {
  title: string;
  id: number;
}

//if depends on a query make a separate state and include in the component
const url = "https://jsonplaceholder.typicode.com/todos/";

const WithCustomHook = () => {
  const { data, error, isLoading } = useFetch<Todo[]>(url);

  if (error) return <p>{error as string}</p>;
  if (isLoading || !data) return <p>Loading...</p>;

  const slicedData = (data as Todo[])?.slice(0, 5);

  return (
    <div>
      {slicedData.map((item: Todo) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default WithCustomHook;
