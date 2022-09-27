import { Router } from "express";

const router = Router();

// get api all todo
router.get("/api/todos", getTodos);

// get specific todo
router.get("/api/todo/:id", getTodos);

// add todo
router.post("/api/add-todo", addTodo);

// update todo
router.put("/api/update-todo/:id", updateTodo);

// remove todo
router.delete("/api/remove-todo/:id"removeTodo);

export default router