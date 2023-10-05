import express from "express";
import {
   deleteUser,
   deleteUserProfile,
   getLikedMovies,
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
router.delete("/delete", protect, deleteUserProfile);
router.put("/password", protect, updateUser);
router.get("/favorites",protect,getLikedMovies)

export { router as userRouter };
