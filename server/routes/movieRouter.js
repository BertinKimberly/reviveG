import express from "express";

import { protect, admin } from "../middlewares/Auth.js";
import { importMovies } from "../controllers/MoviesController";

const router = express.Router();

// ****************PUBLIC ROUTES*******************
router.post("/", importMovies);

// ***********************PRIVATE ROUTES****************************

// ***********************ADMIN ROUTES****************************

export { router as moviesRoute };
