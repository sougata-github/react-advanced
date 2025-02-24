import { useEffect, useState } from "react";
import axios from "axios";

import TodoList from "./TodoList";

export interface withTodoProps {
  todo: {
    id: number;
    title: string;
    body: string;
  };
}

const withTodo = <P extends withTodoProps>(
  Component: React.ComponentType<P>
) => {
  return (props: Omit<P, keyof withTodoProps>) => {
    const [todo, setTodo] = useState<withTodoProps["todo"] | null>();

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        setTodo(response?.data);
      })();
    }, []);

    if (!todo) return <p>Loading...</p>;

    return <Component {...(props as P)} todo={todo} />;
  };
};

export const Todo = withTodo(TodoList);
