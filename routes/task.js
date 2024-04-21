import express from "express";
import {
  createTask,
  getTasks,
  getTaskByTodo,
  replaceTaskByTodo,
  updateTaskByTodo,
  deleteTaskByTodo,
  getTaskById,
  replaceTaskById,
  updateTaskById,
  deleteTaskById,
  getTaskByObjectId,
  updateTaskByObjectId,
  deleteTaskByObjectId,
} from "../controller/task.js";
const taskRouter = express.Router();
taskRouter
  .post("/", createTask)
  .get("/", getTasks)
  .get("/:todo", getTaskByTodo)
  .put("/:todo", replaceTaskByTodo)
  .patch("/:todo", updateTaskByTodo)
  .delete("/:todo", deleteTaskByTodo)
  .get("/:id", getTaskById)
  .put("/:id", replaceTaskById)
  .patch("/:id", updateTaskById)
  .delete("/:id", deleteTaskById)
  .get("/:_id", getTaskByObjectId)
  .patch("/:_id", updateTaskByObjectId)
  .delete("/:_id", deleteTaskByObjectId);

export default taskRouter;
