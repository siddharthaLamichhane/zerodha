import express from "express";
import { HoldingModel } from "./models/HoldingModel.js";
import { PositionModel } from "./models/PositionsModel.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();
app.use(bodyParser());
app.use(cors());
app.use(bodyParser.json());

app.get("/allholdings", async (req, res) => {
  let allholding = await HoldingModel.find({});
  res.json(allholding);
});
app.get("/allpositions", async (req, res) => {
  let allpositions = await PositionModel.find({});
  res.json(allpositions);
});

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
