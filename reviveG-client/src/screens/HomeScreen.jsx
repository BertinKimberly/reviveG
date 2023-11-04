import React, { useEffect } from "react";
import toast from "react-hot-toast";
import Banner from "../components/Home/Banner";
import PopularMovies from "../components/Home/PopularMovies";
import Promos from "../components/Home/Promos";
import TopRated from "../components/Home/TopRated";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
   getAllMoviesAction,
   getRandomMoviesAction,
   getTopRatedMovieAction,
} from "../redux/Actions/MoviesActions";
import FAQs from "../components/Home/FAQs";

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
   } = useSelector((state) => state.getTopRatedMovies);

   //all movies
   const { isLoading, isError, movies } = useSelector(
      (state) => state.getAllMovies
   );
   //useEffect
   useEffect(() => {
      //get all movies
      dispatch(getAllMoviesAction({}));
      // Get random movies
      dispatch(getRandomMoviesAction());

      // Get top rated movies
      dispatch(getTopRatedMovieAction());

      // Handle errors
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
            {/* FAQs */}
            <FAQs /> 
         </div>
      </Layout>
   );
};

export default HomeScreen;
