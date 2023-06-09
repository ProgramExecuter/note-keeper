// Import packages
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 8);
};

export const matchPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export const createJwt = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1d" });
};
