// Import packages
import { Schema, model } from "mongoose";

const pageSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Owner of page is required"],
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "note",
    required: [true, "Related note is required"],
  },
});

export default model("Page", pageSchema);
