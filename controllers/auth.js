// Import files-functions
import User from "../models/user.js";
import { encryptPassword, matchPassword, createJwt } from "../utils/auth.js";

export const loginUser = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password)
      throw Error("Username or Password Incorrect");

    const foundUser = (await User.find({ username: req.body.username }))[0];
    if (!foundUser) throw Error("Username or Password Incorrect");

    const passwordsMatch = matchPassword(req.body.password, foundUser.password);
    if (!passwordsMatch) throw Error("Username or Password Incorrect");

    const jwtToken = createJwt({ username: req.body.username });
    foundUser.jet = jwtToken;
    await foundUser.save();

    res.status(200).json({ success: true, token: jwtToken });
  } catch (err) {
    console.log(err);
    res.status(401).json(err.message);
  }
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
