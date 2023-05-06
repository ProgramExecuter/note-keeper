// Import packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import files-functions
import allRoutes from "./routes/index.js";

// Attaching Environment Variables
dotenv.config();

const app = express();

// Enable form data's conversion to json
app.use(express.json());

// Connect to MongoDB server
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log("DB Connected"))
  .catch((err) => console.log(err.message));

// Attach all the routes
app.use("/api", allRoutes);

// Server Setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
