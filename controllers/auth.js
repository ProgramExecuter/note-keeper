// Import files-functions
import User from "../models/user.js";
import { encryptPassword, createJwt } from "../utils/auth.js";

export const loginUser = async (req, res) => {
  res.send("Login User");
};

export const signupUser = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password)
      throw Error("Username and Password are required");

    const encryptedPassword = encryptPassword(req.body.password);
    req.body.password = encryptedPassword;

    const jwtToken = createJwt({ username: req.body.username });
    req.body.jwt = jwtToken;

    const newUser = new User(req.body);
    await newUser.save();

    res.status(200).json({ success: true, token: jwtToken });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
