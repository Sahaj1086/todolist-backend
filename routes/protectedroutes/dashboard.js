const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    userId: req.user.id
  });
});

module.exports = router;
