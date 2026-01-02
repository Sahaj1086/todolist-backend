const express = require("express");
const auth = require("../../middleware/authMiddleware");

const dashboardRoutes = require("./dashboard");
const todoRoutes = require("./todos");

const router = express.Router();

// Apply auth middleware ONCE for all protected routes
router.use(auth);

// Sub routes
router.use("/dashboard", dashboardRoutes);
router.use("/todos", todoRoutes);

module.exports = router;
