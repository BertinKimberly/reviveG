import express from "express";
import { registerUser } from "../controllers/UsersController.js";

const router = express.Router();

// ********************PUBLIC ROUTES**********************

router.post("/register", registerUser);

export { router as userRouter };
