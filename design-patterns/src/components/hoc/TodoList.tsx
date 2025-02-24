import { withTodoProps } from "./withTodo";

interface Props extends withTodoProps {
  title: string;
}

const TodoList = ({ todo, title }: Props) => {
  return (
    <div>
      <p>{title}</p>
      <p>
        <strong>Todo ID:</strong> {todo.id}
      </p>
      <h1>
        <strong>Todo Title:</strong> {todo.title}
      </h1>
    </div>
  );
};

export default TodoList;
