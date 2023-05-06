// Import packages
import express from "express";
import dotenv from "dotenv";

// Import files-functions
import allRoutes from "./routes/index.js";

// Attaching Environment Variables
dotenv.config();

const app = express();

// Attach all the routes
app.use("/api", allRoutes);

// Server Setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
