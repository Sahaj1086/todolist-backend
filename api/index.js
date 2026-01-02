require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("../routes/authroutes/auth");
const protectedRoutes = require("../routes/protectedroutes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://todolist-frontend-omega-two.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

module.exports = app;
