import { Router } from "express";

import {
  getTodos,
  postTodo,
  removeTodo,
  updateTodo,
} from "../controllers/todos";

const router = Router();

router.get("/", getTodos);
router.post("/", postTodo);
router.patch("/", updateTodo);
router.delete("/", removeTodo);

export default router;
