import React, { useEffect } from "react";
import toast from "react-hot-toast";
import Banner from "../components/Home/Banner";
import PopularMovies from "../components/Home/PopularMovies";
import Promos from "../components/Home/Promos";
import TopRated from "../components/Home/TopRated";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
   getRandomMoviesAction,
   getTopRatedMovieAction,
} from "../redux/Actions/MoviesActions";

const HomeScreen = () => {
   const dispatch = useDispatch();

   //use selectors
   const {
      isLoading: randomLoading,
      isError: randomError,
      movies: randomMovies,
   } = useSelector((state) => state.getRandomMovies);
   const {
      isLoading: topLoading,
      isError: topError,
      movies: topMovies,
   } = useSelector((state) => state. getTopRatedMovies);
   

   const { isLoading, isError, movies } = useSelector(
      (state) => state.getAllMovies
   );

   //useEffect

   useEffect(() => {
      //get random movies

      dispatch(getRandomMoviesAction());

      //get all movies

      dispatch(getRandomMoviesAction({}));

      //get top rated movies
      dispatch(getTopRatedMovieAction({}));

      //errors

      if (isError || randomError || topError) {
         toast.error("Something went wrong");
      }
   }, [dispatch, isError, randomError, topError]);

   return (
      <Layout>
         <div className='container mx-auto min-h-screen px-2 mb-6'>
            <Banner
               movies={movies}
               isLoading={isLoading}
            />
            <PopularMovies
               movies={randomMovies}
               isLoading={randomLoading}
            />
            <Promos />
            <TopRated
               movies={topMovies}
               isLoading={topLoading}
            />
            {/* test */}

            
         </div>
      </Layout>
   );
};

export default HomeScreen;
