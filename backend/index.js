require("dotenv").config();
const express = require("express");
const app = express();

// Deine Middleware & Routen …

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API läuft auf Port ${PORT}`);
});
