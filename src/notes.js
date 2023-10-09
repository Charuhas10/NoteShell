import { readDB, saveDB, addToDB } from "./db.js";

export const newNote = async (noteContent, tags) => {
  const newNote = {
    tags,
    content: noteContent,
    id: Date.now(),
  };
  await addToDB(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await readDB();
  return notes;
};

export const findNotes = async (filter) => {
  const { notes } = await readDB();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const { notes } = await readDB();
  const match = notes.find((note) => note.id === id);
  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return id;
  }
};

export const removeAllNotes = () => {
  saveDB({ notes: [] });
};
