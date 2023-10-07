import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.log("Getting error " + err);
    exit(1);
  }
});

export const createTable = () => {
  db.run(
    "CREATE TABLE IF NOT EXISTS todo (id VARCHAR(40) PRIMARY KEY, title VARCHAR(100), text VARCHAR(500), color VARCHAR(7), favorite BOOL)"
  );
};

export const insertDBToDo = (id, title, text, color, favorite) => {
  const sql = db.prepare(
    "INSERT INTO todo (id, title, text, color, favorite) VALUES (?, ?, ?, ?, ?)"
  );
  sql.run(id, title, text, color, favorite);
  console.log("Sucesses added");
  sql.finalize();
};

export const getDBTodos = (callback) => {
  db.all("SELECT * FROM todo", (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err, null); // Pass error to the callback
      return;
    }
    callback(rows); // Pass JSON data to the callback
  });
};

export const deleteDBToDo = (id) => {
  const sql = db.prepare("DELETE FROM todo WHERE id = ?");
  sql.run(id);
  console.log("Sucesses deletion");
  sql.finalize();
};

export const updateDBToDo = (id, updatedProperties) => {
  const keys = Object.keys(updatedProperties);
  const values = Object.values(updatedProperties);
  const setStatements = keys.map((key) => `${key} = ?`).join(", ");
  const stmt = db.prepare(`UPDATE todo SET ${setStatements} WHERE id = ?`);
  stmt.run(...values, id);
  stmt.finalize();
};
