import { model } from "mongoose";
import { PositionSchema } from "../schemas/PositionsSchema.js";

export const PositionModel = model("position", PositionSchema);
