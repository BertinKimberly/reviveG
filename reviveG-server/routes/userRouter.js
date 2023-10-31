import express from "express";
import {
   addLikedMovie,
   changePassword,
   deleteLikedMovies,
   deleteUser,
   deleteUserProfile,
   getLikedMovies,
   getUsers,
   loginUser,
   registerUser,
   updateUser,
} from "../controllers/UsersController.js";
import { admin, protect } from "../middlewares/Auth.js";

const router = express.Router();

// ********************PUBLIC ROUTES**********************

router.post("/register", registerUser);
router.post("/login", loginUser);

// ********************PROTECTED ROUTES**********************
router.put("/update", protect, updateUser);
router.delete("/delete", protect, deleteUserProfile);
router.put("/password", protect, changePassword);
router.get("/favorites", protect, getLikedMovies);
router.post("/favorites", protect, addLikedMovie);
router.delete("/favorites", protect, deleteLikedMovies);

// ******************ADMIN ROUTES*********************

router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);

export { router as userRouter };
