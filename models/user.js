// Import packages
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required"] },
  password: { type: String, required: [true, "Password is required"] },
  jwt: String,
});

export default model("User", userSchema);
