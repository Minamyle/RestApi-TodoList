const express = require("express");
const router = express.Router();

let todos = []; 
let idCounter = 1;

// Create 
router.post("/todos", (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const newTodo = { id: idCounter++, title, description, dueDate, status };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Get All
router.get("/todos", (req, res) => {
  res.json(todos);
});

// Get Single
router.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "To-Do not found" });
  res.json(todo);
});

// Update 
router.put("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "To-Do not found" });

  const { title, description, dueDate, status } = req.body;
  if (title) todo.title = title;
  if (description) todo.description = description;
  if (dueDate) todo.dueDate = dueDate;
  if (status) todo.status = status;

  res.json(todo);
});

// Delete
router.delete("/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).send();
});
//fiter
router.get("/todos", (req, res) => {
    const { status } = req.query;
    const filteredTodos = status
      ? todos.filter((t) => t.status === status)
      : todos;
    res.json(filteredTodos);
  });
  

module.exports = router;
