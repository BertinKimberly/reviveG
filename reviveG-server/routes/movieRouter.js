import express from "express";

import { protect, admin } from "../middlewares/Auth.js";
import {
   createMovie,
   createMovieReview,
   deleteAllMovies,
   deleteMovie,
   getMovieById,
   getMovies,
   getRandomMovies,
   getTopRatedMovies,
   importMovies,
   updateMovie,
} from "../controllers/MoviesController.js";

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
router.delete("/:id",protect,admin,deleteMovie)
router.delete("/",protect,admin,deleteAllMovies)
router.post("/",protect,admin,createMovie)

export { router as moviesRoute };
