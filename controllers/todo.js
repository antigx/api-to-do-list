import { v4 as uuidv4 } from "uuid";
import { insertDBToDo, getDBTodos, deleteDBToDo, updateDBToDo } from "./bd.js";

export const getToDo = (req, res) => {
  getDBTodos((json) => {
    res.send(json);
  });
};

export const createToDo = (req, res) => {
  const { title, text, color, favorite } = req.body;

  insertDBToDo(uuidv4(), title, text, color, favorite);
  getDBTodos((json) => {
    res.send(json);
  });
};

export const deleteToDo = (req, res) => {
  const { id } = req.params;
  deleteDBToDo(id);
  getDBTodos((json) => {
    res.send(json);
  });
};

export const updateToDo = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  delete updatedData.id;
  updateDBToDo(id, updatedData);
  getDBTodos((json) => {
    res.send(json);
  });
};
