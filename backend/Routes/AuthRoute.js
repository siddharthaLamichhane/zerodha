import express from "express";
import { Signup } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";
export const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
