// Import packages
import express from "express";

// Import files-functions
import noteRoutes from "./note.js";
import authRoutes from "./auth.js";

const router = express.Router();

// Attach Routes
router.use("/notes", noteRoutes);
router.use("/auth", authRoutes);

export default router;
