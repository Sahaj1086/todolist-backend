const db = require("../config/db");

// GET TODOS
exports.getTodos = async (req, res) => {
  const userId = req.user.id;
  db.query("SELECT * FROM todos WHERE user_id = ? and isdelete = 0 and isactive=1", [userId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// CREATE TODO
exports.createTodo = (req, res) => {
  const userId = req.user.id;
  const { title, description } = req.body;

  db.query(
    "INSERT INTO todos (user_id, title, description, isdelete, isactive,created_at) VALUES (?, ?, ?, 0, 1,now())",
    [userId, title, description],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Todo created successfully" });
    }
  );
};

// DELETE TODO
exports.deleteTodo = (req, res) => {
  const userId = req.user.id;
  const todoId = req.params.id;

  db.query(
    "UPDATE todos SET isdelete = 1, deleted_at = now() WHERE id = ? AND user_id = ?",
    [todoId, userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ message: "Todo deleted successfully" });
    }
  );
}

// UPDATE TODO
exports.updateTodo = (req, res) => {
  const userId = req.user.id;
  const todoId = req.params.id;
  const { title, description } = req.body;

  db.query(
    "UPDATE todos SET title = ?, description = ?, updated_at = now() WHERE id = ? AND user_id = ? AND isdelete = 0",
    [title, description, todoId, userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ message: "Todo updated successfully" });
    }
  );
}
