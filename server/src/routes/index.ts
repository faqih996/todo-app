import { Router } from "express";

import bodyParser from "body-parser";

import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  removeTodo,
} from "../controllers/todos";

const router = Router();
const jsonParser = bodyParser.json();
// get api all todo
router.get("/api/todos", getTodos);

// get specific todo
router.get("/api/todo/:id", getTodo);

// add todo
router.post("/api/add-todo", jsonParser, addTodo);

// update todo
router.put("/api/update-todo/:id", jsonParser, updateTodo);

// remove todo
router.delete("/api/remove-todo/:id", jsonParser, removeTodo);

export default router;
