// Import packages
import express from "express";

// Import files-functions
import { loginUser } from "../controllers/auth.js";

const router = express.Router();

// Login route
router.post("/login", loginUser);

export default router;
