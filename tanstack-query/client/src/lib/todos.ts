const URL = import.meta.env.VITE_API_URL;

interface postTodoParams {
  title: string;
}

interface updateTodoParams {
  id: string;
  completed: boolean;
}

export async function getTodos() {
  const response = await fetch(URL);

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

export async function postTodo({ title }: postTodoParams) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

export async function updateTodo({ id, completed }: updateTodoParams) {
  const response = await fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, completed }),
  });

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}

export async function removeTodo({ id }: { id: string }) {
  const response = await fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
}
