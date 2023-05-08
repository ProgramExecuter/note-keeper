// Import packages
import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  title: {
    type: String,
    required: [true, "Note's title is required"],
  },
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Owner of note is required"],
  },
  pages: [
    {
      type: Schema.Types.ObjectId,
      ref: "page",
    },
  ],
});

export default model("Note", noteSchema);
