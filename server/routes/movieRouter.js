import express from "express";

import { protect, admin } from "../middlewares/Auth.js";
import { getMovieById, getMovies, getRandomMovies, getTopRatedMovies, importMovies } from "../controllers/MoviesController";

const router = express.Router();

// ****************PUBLIC ROUTES*******************
router.post("/import", importMovies);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/rated/top", getTopRatedMovies);
router.get("/random/all", getRandomMovies);

// ***********************PRIVATE ROUTES****************************

// ***********************ADMIN ROUTES****************************

export { router as moviesRoute };
