const express = require("express");
const route = express.Router();
const {
  createTodo,
  fetchTodos,
  fetchTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoCntrlr");
route.get("/", fetchTodos);
route.get("/:id", fetchTodo);
route.post("/", createTodo);
route.patch("/:id", updateTodo);
route.delete("/:id", deleteTodo);

module.exports = route;
