import asyncHandler from "express-async-handler";
import Movie from "../models/MovieModel";
//*****************PUBLIC CONTROLLERS********************* */

export const importMovies = asyncHandler(async (req, res) => {
   await Movie.deleteMany({});

   const movies = await Movie.insertMany(MoviesData);
   res.status(201).json(movies);
});

export const getMovies = asyncHandler(async (req, res) => {
   try {
      //filter movies by category,time,lang,rate,year and search

      const { category, time, language, rate, year, search } = req.query;

      let query = {
         ...(category && { category }),
         ...(time && { time }),
         ...(language && { language }),
         ...(rate && { rate }),
         ...(year && { year }),
         ...(search && { name: { $regex: search, $options: "i" } }),
      };

      //load more movies

      const page = Number(req.query.pageNumber) || 1;
      const limit = 2;
      const skip = (page - 1) * limit;

      //find movies by query, skip and limit

      const movies = await Movie.find(query)
         .sort({ createdArt: -1 })
         .skip(skip)
         .limit(limit);

      //get total number of mobies
      const count = await Movie.countDocuments(query);

      //send response with movies and total number of movies
      res.json({
         movies,
         page,
         pages: Math.ceil(count / limit),
         totalMovies: count,
      });
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});
