import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader, Plus, Trash } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

import { getTodos, postTodo, removeTodo, updateTodo } from "../lib/todos";
import { queryClient } from "../lib/queryClient";
import { Todo } from "../types";

const Mutation = () => {
  const [title, setTitle] = useState("");
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const {
    mutate: createTodo,
    error: createTodoError,
    status,
  } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => alert("Couldn't create todo"),
  });

  const { mutate: checkTodo } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => alert("Couldn't update todo"),
  });

  const { mutate: deleteTodo } = useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {
      alert("Couldn't delete todo.");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "") return;

    createTodo({ title: title.trim() });
    setTitle("");
  };

  const handleCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const completed = e.target.checked;

    checkTodo({ id, completed });
  };

  const handleDelete = (id: string) => {
    deleteTodo({ id });
  };

  if (error) return <p className="p-20 text-red-400">Error fetching todos.</p>;

  return (
    <div className="p-20 flex flex-col gap-4">
      <h1>Todo List</h1>
      <form
        className="inline-flex pr-4 gap-2 items-center mt-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          className="border border-black/5 rounded-lg bg-black/5 p-2 text-base"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 p-3 rounded-lg bg-black/5 hover:bg-black/10 transition-all"
        >
          {status === "pending" ? (
            <Loader className="animate-spin transition size-4" />
          ) : (
            <>
              <Plus className="size-4" />{" "}
              <span className="text-sm">Create</span>
            </>
          )}
        </button>
      </form>
      {createTodoError && (
        <p className="text-red-500 mt-2">Cannot create todo.</p>
      )}
      {status === "success" && (
        <p className="mt-2 text-green-500">Todo created!</p>
      )}
      {isLoading ? (
        <Loader className="animate-spin transition size-4" />
      ) : todos.length !== 0 ? (
        <ul className="mt-4 inline-flex flex-col gap-1">
          {todos?.map((todo: Todo) => (
            <li key={todo.id} className="max-w-xs flex justify-between">
              <div className="inline-flex gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleCheckChange(e, todo.id)}
                  className="cursor-pointer"
                />
                <span className={twMerge("", todo.completed && "line-through")}>
                  {todo.title}
                </span>
              </div>

              <Trash
                role="button"
                className="size-4 flex-end cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Start adding some todos.</p>
      )}
    </div>
  );
};

export default Mutation;
