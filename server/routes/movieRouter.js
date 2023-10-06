import express from "express";

import { protect, admin } from "../middlewares/Auth.js";
import { getMovies, importMovies } from "../controllers/MoviesController";

const router = express.Router();

// ****************PUBLIC ROUTES*******************
router.post("/import", importMovies);
router.post("/", getMovies);

// ***********************PRIVATE ROUTES****************************

// ***********************ADMIN ROUTES****************************

export { router as moviesRoute };
