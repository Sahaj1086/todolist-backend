require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("../routes/authroutes/auth");
const protectedRoutes = require("../routes/protectedroutes");

const app = express();

app.use(
  cors({
    origin: "https://todolist-frontend-omega-two.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

module.exports = app;
