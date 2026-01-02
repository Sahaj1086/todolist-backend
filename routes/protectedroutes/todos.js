const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require("../../controller/todoController");

const router = express.Router();

router.get("/", getTodos);           // GET todos
router.post("/", createTodo);        // CREATE todo
router.put("/:id", updateTodo);      // UPDATE todo
router.delete("/:id", deleteTodo);   // SOFT DELETE todo

module.exports = router;
