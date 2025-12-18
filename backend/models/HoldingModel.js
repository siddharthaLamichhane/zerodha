import { model } from "mongoose";
import { HoldingSchema } from "../schemas/HoldingSchema.js";

export const HoldingModel = model("Holding", HoldingSchema);
