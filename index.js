require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authroutes/auth");
const protectedRoutes = require("./routes/protectedroutes/index");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// public routes
app.use("/api/auth", authRoutes);

// protected routes
app.use("/api", protectedRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
