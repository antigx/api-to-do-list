import { v4 as uuidv4 } from "uuid";

let toDos = [];

export const getToDo = (req, res) => {
  res.send(toDos);
};

export const createToDo = (req, res) => {
  const toDo = req.body;
  toDos.push({ ...toDo, id: uuidv4(), createdAt: new Date() });
  res.send(toDos);
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
