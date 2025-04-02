import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useEffect } from "react";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Todo } from "../types";

const PAGE_SIZE = 10;

const fetchTodos = async ({ pageParam = 1 }: { pageParam: number }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=${PAGE_SIZE}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const items: Todo[] = await response.json();
  return { items, pageParam }; //expects a cursor so include the pageParam.
};

const InfiniteScroll = () => {
  const { data, error, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["todos"],
      queryFn: fetchTodos,
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.items.length === PAGE_SIZE
          ? lastPage.pageParam + 1
          : undefined,
    });

  const { isIntersecting, targetRef } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, isFetchingNextPage, hasNextPage, fetchNextPage]);

  if (error) {
    return <p className="p-20">Error fetching todos.</p>;
  }

  return (
    <div className="p-20">
      <h1>Todos</h1>
      <div className="max-w-xl mt-2 h-[260px] overflow-y-auto">
        {data?.pages?.flatMap((page) =>
          page?.items?.map((todo) => (
            <p key={todo.id}>
              {todo.id}. {todo.title}
            </p>
          ))
        )}
        {isFetchingNextPage && (
          <div className="w-full flex items-center justify-center h-4">
            <Loader className="animate-spin transition size-4" />
          </div>
        )}
        <div ref={targetRef} className="h-4" />
        {/*should be last element inside
        the container */}
      </div>
    </div>
  );
};

export default InfiniteScroll;
