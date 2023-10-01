import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import MovieRates from "../components/single/MovieRates";
import Titles from "../components/Titles";
import ShareModal from "../components/Modals/ShareModal";

const SingleMovie = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const { id } = useParams();
   const movie = Movies.find((movie) => movie.name === id);
   const RelatedMovies = Movies.filter((m) => m.category === m.category);
   return (
      <Layout>
         <ShareModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            movie={movie}
         />
         <MovieInfo movie={movie} setModalOpen={setModalOpen}/>
         <div className='container mx-auto min-h-screen px-2 my-6'>
            <MovieCasts />
            <MovieRates movie={movie} />
            <div className='my-16'>
               <Titles
                  title='Related Movies'
                  Icon={BsCollectionFill}
               />
               <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-4'>
                  {Movies.map((movie, index) => (
                     <RelatedMovies
                        key={index}
                        movie={movie}
                     />
                  ))}
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default SingleMovie;
