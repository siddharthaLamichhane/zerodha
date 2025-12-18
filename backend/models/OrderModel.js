import { model } from "mongoose";
import { OrdersSchema } from "../schemas/OrderSchema.js";

export const OrderModel = model("order", OrdersSchema);
