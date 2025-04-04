import { Response, Request } from "express";

import { db } from "../db";

// Fix: Add req parameter and put it before res
export async function getTodos(req: Request, res: Response) {
  try {
    const todos = await db.todo.findMany({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Couldn't get todos" });
  }
}

export async function postTodo(req: Request, res: Response) {
  try {
    const { title } = req.body;
    const todo = await db.todo.create({
      data: {
        title,
        completed: false,
      },
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Couldn't create todo" });
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const { id, completed } = req.body;
    const updatedTodo = await db.todo.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });
    res.status(201).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Couldn't update todo" });
  }
}

export async function removeTodo(req: Request, res: Response) {
  try {
    const { id } = req.body;
    const removedTodo = await db.todo.delete({
      where: {
        id,
      },
    });
    res.status(200).json(removedTodo);
  } catch (error) {
    res.status(500).json({ message: "Couldn't remove todo" });
  }
}
