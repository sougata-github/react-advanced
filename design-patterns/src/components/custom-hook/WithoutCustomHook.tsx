import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
}

const WithoutCustomHook = () => {
  const [todo, setTodo] = useState<Todo[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data: Todo[] = await response.json();
      setTodo(data);
    })();
  }, []);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      {todo.map((item: Todo) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default WithoutCustomHook;
