import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { router } from "./Routes/AuthRoute.js";
import { HoldingModel } from "./models/HoldingModel.js";
import { PositionModel } from "./models/PositionsModel.js";

dotenv.config();

const app = express();
const { MONGO_URL, PORT } = process.env;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", router);

app.get("/allholdings", async (req, res) => {
  const allholding = await HoldingModel.find({});
  res.json(allholding);
});

app.get("/allpositions", async (req, res) => {
  const allpositions = await PositionModel.find({});
  res.json(allpositions);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from app" });
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
