import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/single/MovieInfo";
import MovieCasts from "../components/single/MovieCasts";
import MovieRates from "../components/single/MovieRates";
import Titles from "../components/Titles";
import ShareModal from "../components/Modals/ShareModal";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByIdAction } from "../redux/Actions/MoviesActions";
import { SidebarContext } from "../context/DrawerContext";
import FileSaver from "file-saver";
import Loader from "../components/Notifications/Loader";
import { RiMovie2Line } from "react-icons/ri";
import { BsCollectionFill } from "react-icons/bs";
const SingleMovie = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const { progress, setProgress } = useContext(SidebarContext);

   const sameClass = "w-full gap-6 flex-colo min-h-screen";
   const { id } = useParams();
   const dispatch = useDispatch();
   //use selector

   const { isLoading, isError, movie } = useSelector(
      (state) => state.getMovieById
   );

   const { movies } = useSelector((state) => state.getAllMovies);

   //related movies

   const RelatedMovies = movies?.filter((m) => m?.category === m?.category);

   //download video
   const DownloadMovieVideo = async (videoUrl, name) => {
      await DownloadMovieVideo(videoUrl, setProgress).then((data) => {
         setProgress(0);
         FileSaver.saveAs(data, name);
      });
   };

   //useEffect
   useEffect(() => {
      //movie id
      dispatch(getMovieByIdAction(id));
   }, [dispatch, id]);
   return (
      <Layout>
         
         {isLoading ? (
            <div className={sameClass}>
               <Loader />
            </div>
         ) : isError ? (
            <div className={sameClass}>
               <div className='flex-colo w-24 p-5 rounded-full bg-dry text-subMain text-4xl mb-4'>
                  <RiMovie2Line />
               </div>
               <p className='text-border text-sm'>Something went wrong</p>
            </div>
         ) : (
            <>
               <ShareModal
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  movie={movie}
               />
               <MovieInfo
                  movie={movie}
                  setModalOpen={setModalOpen}
                  DownloadVideo={DownloadMovieVideo}
                  progress={progress}
               />
               <div className='container mx-auto min-h-screen px-2 my-6'>
                  <MovieCasts movie={movie} />
                  <MovieRates movie={movie} />
                  {/* Related Movies */}
                  {RelatedMovies?.length > 0 && (
                     <div className='my-16'>
                        <Titles
                           title='Related Movies'
                           Icon={BsCollectionFill}
                        />
                        <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-4'>
                           {movies.map((movie) => (
                              <RelatedMovies
                                 key={movie?._id}
                                 movie={movie}
                              />
                           ))}
                        </div>
                     </div>
                  )}
               </div>
            </>
         )}
      </Layout>
   );
};

export default SingleMovie;
