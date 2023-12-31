import { jest } from "@jest/globals";

jest.unstable_mockModule("../src/db.js", () => ({
  addToDB: jest.fn(),
  readDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { readDB, saveDB, addToDB } = await import("../src/db.js");
const { newNote, getAllNotes, removeNote } = await import("../src/notes.js");

beforeEach(() => {
  addToDB.mockClear();
  readDB.mockClear();
  saveDB.mockClear();
});

describe("cli app", () => {
  test("newNote inserts data and returns it", async () => {
    const data = {
      tags: ["tag1", "tag2"],
      content: "Test note",
      id: Date.now(),
    };
    addToDB.mockResolvedValue(data);

    const result = await newNote(data.content, data.tags);
    expect(result.content).toEqual(data.content);
    expect(result.tags).toEqual(data.tags);
  });

  test("getAllNotes returns all notes", async () => {
    const db = {
      notes: ["note1", "note2", "note3"],
    };
    readDB.mockResolvedValue(db);

    const result = await getAllNotes();
    expect(result).toEqual(db.notes);
  });

  test("removeNote does nothing if id is not found", async () => {
    const notes = [
      { id: 1, content: "note 1" },
      { id: 2, content: "note 2" },
      { id: 3, content: "note 3" },
    ];
    saveDB.mockResolvedValue(notes);

    const idToRemove = 4;
    const result = await removeNote(idToRemove);
    expect(result).toBeUndefined();
  });
});
