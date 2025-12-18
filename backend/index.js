import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from app",
  });
});

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.MONGO_URL);

  console.log("DB Connected");
  console.log(`app listening ${process.env.PORT} `);
});
