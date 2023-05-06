// Import packages
import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  title: { type: String, required: [true, "Note's title is required"] },
  description: String,
  username: { type: String, required: [true, "Owner of note is required"] },
  pages: [
    {
      title: {
        type: String,
        required: [true, "Title of the page is required"],
      },
      content: String,
    },
  ],
});

export default model("Note", noteSchema);
