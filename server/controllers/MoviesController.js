import asyncHandler from "express-async-handler";
import Movie from "../models/MovieModel";
//*****************PUBLIC CONTROLLERS********************* */

export const importMovies = asyncHandler(async (req, res) => {
   await Movie.deleteMany({});

   const movies = await Movie.insertMany(MoviesData);
   res.status(201).json(movies);
});
