import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Todo } from "../types";

const fetchTodos = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", currentPage],
    queryFn: () => fetchTodos(currentPage, pageSize),
  });

  if (error)
    return (
      <p className="p-20 text-red-500">There was an error fetching data.</p>
    );

  return (
    <div className="p-20">
      <h1>Todos</h1>

      <ul className="mt-2 h-[240px]">
        {!isLoading ? (
          data.map((todo: Todo) => (
            <p key={todo.id}>
              {todo.id}. {todo.title}
            </p>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>

      <div className="mt-2 max-w-xs flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          className="w-fit px-4 py-2 bg-black/10 rounded-lg mt-4 disabled:bg-black/5"
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          className="w-fit px-4 py-2 bg-black/10 rounded-lg mt-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
