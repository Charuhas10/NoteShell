import fs from "node:fs/promises";

const DB_PATH = new URL("../db.json", import.meta.url);

export const readDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};

export const addToDB = async (note) => {
  const db = await readDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
};
