import express from "express";

import { protect, admin } from "../middlewares/Auth.js";
import {
   createMovieReview,
   getMovieById,
   getMovies,
   getRandomMovies,
   getTopRatedMovies,
   importMovies,
   updateMovie,
} from "../controllers/MoviesController";

const router = express.Router();

// ****************PUBLIC ROUTES*******************
router.post("/import", importMovies);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router.get("/rated/top", getTopRatedMovies);
router.get("/random/all", getRandomMovies);

// ***********************PRIVATE ROUTES****************************
router.post("/:id/reviews", protect, createMovieReview);

// ***********************ADMIN ROUTES****************************
router.put("/:id",protect,admin,updateMovie)

export { router as moviesRoute };
