// Import packages
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username and password are required"],
    unique: [true, "Username should be unique"],
  },
  password: {
    type: String,
    required: [true, "Username and password are required"],
  },
  jwt: String,
});

export default model("User", userSchema);
