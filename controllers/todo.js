import { v4 as uuidv4 } from "uuid";
import { insertTodo, getDBTodos } from "./bd.js";

let toDos = [
  {
    id: "d39c238a-012c-4c0a-a1b6-a924d9da9440",
    title: "sdfas",
    text: "asdf",
    color: "#FFFFFF",
    favorite: 0,
  },
];

export const getToDo = (req, res) => {
  res.json(toDos);
  /*   getDBTodos((json) => {
    res.send(json);
  }); */
};

export const createToDo = (req, res) => {
  const { title, text, color, favorite } = req.body;

  insertTodo(uuidv4(), title, text, color, favorite);
  getDBTodos((json) => {
    res.send(json);
  });
  /*   const toDo = req.body;
  toDos.push({ ...toDo, id: , createdAt: new Date() });
  res.send(toDos); */
};

export const deleteToDo = (req, res) => {
  const { id } = req.params;
  toDos = toDos.filter((toDo) => toDo.id !== id);
  console.log(toDos);
  res.json(toDos);
};

export const updateToDo = (req, res) => {
  const { id } = req.params;
  const { title, text, color, favorite } = req.body;

  const toDo = toDos.find((toDo) => toDo.id === id);

  if (title) toDo.title = title;
  if (text) toDo.text = text;
  if (color) toDo.color = color;
  if (favorite !== undefined) toDo.favorite = favorite;

  res.send(toDos);
};
