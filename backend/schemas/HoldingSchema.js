import { Schema } from "mongoose";

export const HoldingSchema = new Schema({
  name: { type: String, required: true },
  qty: {
    type: Number,
    required: true,
  },
  avg: { type: Number },
  price: { type: Number },

  net: String,
  day: String,
});
