// Import packages
import express from "express";

// Import files-functions
import {
  getAllNotes,
  createNewNote,
  getSingleNote,
  editNote,
  deleteNote,
} from "../controllers/note.js";
import {
  addNewPage,
  getSinglePage,
  editPage,
  deletePage,
} from "../controllers/page.js";

const router = express.Router();

// Attaching routes
router.route("/").get(getAllNotes).post(createNewNote);

router
  .route("/:id")
  .get(getSingleNote)
  .patch(editNote)
  .delete(deleteNote)
  .post(addNewPage);

router
  .route("/:id/:page")
  .get(getSinglePage)
  .patch(editPage)
  .delete(deletePage);

export default router;
