import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { createTable } from "./controllers/bd.js";

import todoRoutes from "./routes/todo.js";

createTable();

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use("/todo", todoRoutes);

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
