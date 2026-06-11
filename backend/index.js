import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todos.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "https://pern-todo-app-frontend-a1r0.onrender.com",
  }),
);

// app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
