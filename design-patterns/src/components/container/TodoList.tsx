export interface Todo {
  id: number;
  title: string;
  body: string;
}

interface TodoListProps {
  todo?: Todo;
}

const TodoList = ({ todo }: TodoListProps) => {
  if (!todo) return <p>Loading...</p>;
  const { id, title } = todo;

  return (
    <div>
      <p>
        <strong>Post ID:</strong> {id}
      </p>
      <h1>
        <strong>Post Title:</strong> {title}
      </h1>
    </div>
  );
};

export default TodoList;
