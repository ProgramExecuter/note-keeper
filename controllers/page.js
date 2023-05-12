// Import files-functions
import Page from "../models/page.js";
import Note from "../models/note.js";

export const addNewPage = async (req, res) => {
  try {
    const newPage = new Page(req.body);

    let foundNote;
    if (req.body.pageNo) {
      foundNote = await Note.findByIdAndUpdate(req.params.id, {
        $push: {
          pages: { $each: [newPage._id], $position: req.body.pageNo - 1 },
        },
      });
    } else {
      foundNote = await Note.findByIdAndUpdate(req.params.id, {
        $push: { pages: newPage._id },
      });
    }

    if (!foundNote) throw Error("Note not found");

    await newPage.save();

    res.status(200).json({ success: true, page: newPage });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

export const getSinglePage = async (req, res) => {
  try {
    const foundNote = await Note.findById(req.params.id, "pages");
    if (!foundNote) throw Error("Note not found");

    const pageId = foundNote.pages[req.params.page - 1];

    const foundPage = await Page.findById(pageId);
    if (!foundPage) throw Error("Page not found");

    res.status(200).json({ success: true, page: foundPage });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

export const editPage = async (req, res) => {
  res.send("Edit a page");
};

export const deletePage = async (req, res) => {
  res.send("Delete page");
};
