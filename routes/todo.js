import express from "express";

import {
  createToDo,
  getToDo,
  deleteToDo,
  updateToDo,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/", getToDo);

router.post("/", createToDo);

router.delete("/:id", deleteToDo);

router.patch("/:id", updateToDo);

export default router;
