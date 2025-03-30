import { useQueries } from "@tanstack/react-query";

type todo = {
  id: string;
  title: string;
};

type post = {
  id: string;
  title: string;
};

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);

  return response.json();
};

const UseQueries = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["posts"],
        queryFn: () => fetchData("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        queryKey: ["todos"],
        queryFn: () => fetchData("https://jsonplaceholder.typicode.com/todos"),
      },
    ],
  });

  const [todosQuery, postsQuery] = results;

  const posts: post[] = postsQuery.data ? postsQuery.data.slice(0, 5) : [];

  const todos: todo[] = todosQuery.data ? todosQuery.data.slice(0, 5) : [];

  if (todosQuery.error || postsQuery.error)
    return <p className="p-20">Error fetching data.</p>;

  return (
    <div className="p-20">
      {postsQuery.isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <ul className="flex flex-col gap-0.5">
          <h1 className="text-lg">Posts</h1>
          {posts.map((post) => (
            <p key={post.id}>
              {post.id}. {post.title}
            </p>
          ))}
        </ul>
      )}

      {todosQuery.isLoading ? (
        <p className="mt-4">Loading todos...</p>
      ) : (
        <ul className="flex flex-col gap-0.5 mt-4">
          <h1 className="text-lg">Todos</h1>
          {todos.map((todo) => (
            <p key={todo.id}>
              {todo.id}. {todo.title}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseQueries;
