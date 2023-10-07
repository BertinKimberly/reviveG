import express from "express";
import {
   createCategory,
   deleteCategory,
   getCategories,
   updateCategory,
} from "../controllers/CategoriesController";
import { protect, admin } from "../middlewares/Auth.js";

const router = express.Router();

// ***********PUBLIC ROUTES************

router.get("/", getCategories);

// ***********ADMIN ROUTES************

router.post("/", protect, admin, createCategory);
router.put("/:id", protect, admin, updateCategory);
router.delete("/:id", protect, admin, deleteCategory);

export { router as categoriesRoute };
