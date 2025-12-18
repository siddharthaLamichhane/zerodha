import { model } from "mongoose";
import { PositionsSchema } from "../schemas/PositionsSchema.js";

export const PositionModel = model("position", PositionsSchema);
