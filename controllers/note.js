// Import files-functions
import Note from "../models/note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notesList = await Note.find();

    return res.status(200).json({ success: true, notes: notesList });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const createNewNote = async (req, res) => {
  try {
    const newNote = new Note(req.body);

    await newNote.save();

    return res.status(201).json({ success: true, note: newNote });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

export const getSingleNote = async (req, res) => {
  try {
    const foundNote = await Note.findById(req.params.id);

    if (!foundNote) throw Error("Note not found");

    return res.status(200).json({ success: true, note: foundNote });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

export const editNote = async (req, res) => {
  try {
    const editNote = {};
    if (req.body.title) editNote.title = req.body.title;
    if (req.body.description) editNote.description = req.body.description;

    const editedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: editNote },
      { returnDocument: "after" }
    );

    if (!editedNote) throw Error("Note not found");

    return res.status(200).json({ success: true, note: editedNote });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const foundNote = await Note.findByIdAndDelete(req.params.id);

    if (!foundNote) throw Error("Note not found");

    return res.status(200).json({ success: true, note: foundNote });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};
