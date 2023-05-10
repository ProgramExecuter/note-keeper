// Import packages
import { Schema, model } from "mongoose";

const pageSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: String,
  username: {
    type: String,
    required: true,
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note",
    required: [true, "Related note is required"],
  },
});

export default model("Page", pageSchema);
