import express from "express";

const app = express();

// Server Setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
