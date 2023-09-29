import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import MovieRates from "../components/single/MovieRates";

const SingleMovie = () => {
   const { id } = useParams();
   const movie = Movies.find((movie) => movie.name === id);
   return (
      <Layout>
         <MovieInfo movie={movie} />
         <div className='container mx-auto min-h-screen px-2 my-6'>
            <MovieCasts />
            <MovieRates movie={movie}/>
         </div>
      </Layout>
   );
};

export default SingleMovie;
