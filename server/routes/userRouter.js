import express from "express";
import {
   deleteUser,
   loginUser,
   registerUser,
   updateUser,
} from "../controllers/UsersController.js";
import { protect } from "../middlewares/Auth.js";

const router = express.Router();

// ********************PUBLIC ROUTES**********************

router.post("/register", registerUser);
router.post("/login", loginUser);

// ********************PROTECTED ROUTES**********************
router.put("/update", protect, updateUser);
router.delete("/delete", protect, deleteUser);
router.put("/password", protect, updateUser);

export { router as userRouter };
