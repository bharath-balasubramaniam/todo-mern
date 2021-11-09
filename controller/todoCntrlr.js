const Todo = require("../model/Todo");

//create a todo
const createTodo = async (req, res) => {
  try {
    const data = await Todo.create(req.body);
    res.status(200).json({ status: "Success", data });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error occured while creating todo",
      error: error,
    });
  }
};

//fetch all todo
const fetchTodos = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({ status: "Success", todos: todo });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error occured while fetching all todos",
    });
  }
};
//fetch single todo
const fetchTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({ status: "Success", todo });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error occured while fetching the todo",
    });
  }
};
//update tode
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "Success", todo });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "error occured while updating the todo",
    });
  }
};
//delete todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: "Success", data: null });
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", message: "error occured while deleting todo" });
  }
};
module.exports = { createTodo, fetchTodos, fetchTodo, updateTodo, deleteTodo };
