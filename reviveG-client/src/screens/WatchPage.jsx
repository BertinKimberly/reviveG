import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovieByIdAction } from "../redux/Actions/MoviesActions";
import { FaCloud, FaHeart, FaPlay } from "react-icons/fa";
import NoImage from "../assets/NoImage.jpg";
import { IfMovieLiked, LikeMovie } from "../context/Functionalities";

import Layout from "../Layout/Layout";
import { BiArrowBack } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";
import Loader from "../components/Notifications/Loader";

const WatchPage = () => {
   const { isLoading, isError, movie } = useSelector(
      (state) => state.getMovieById
   );
   const { id } = useParams();

   const dispatch = useDispatch();
   const [play, setPlay] = useState(false);

   const sameClass = "w-full gap-6 flex-colo min-h-screen";

   //use selector

   const { isLoading: likeLoading } = useSelector(
      (state) => state.userLikeMovie
   );
   const { userInfo } = useSelector((state) => state.userLogin);

   //useEffect

   useEffect(() => {
      //movie id
      dispatch(getMovieByIdAction(id));
   }, [dispatch, id]);
   return (
      <Layout>
         <div className='container mx-auto bg-dry p-6 mb-12'>
            <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
               <Link
                  to={`/movie/${movie?._id}`}
                  className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'
               >
                  <BiArrowBack /> {movie?.name}
               </Link>
               <div className='flex-btn sm:w-auto w-full gap-5'>
                  <button
                     onClick={() => LikeMovie(movie, dispatch, userInfo)}
                     disabled={IfMovieLiked(movie) || likeLoading}
                     className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'
                  >
                     <FaHeart />
                  </button>
                  <a
                     href={movie?.video}
                     className='bg-subMain hover:text-main transitions  text-white rounded px-8 py-3 text-sm flex-rows font-medium'
                  >
                     <FaCloud /> Download
                  </a>
               </div>
            </div>
            {/* watch video */}
            {play ? (
               <video
                  controls
                  autoPlay={play}
                  className='w-full h-screen rounded'
               >
                  <source
                     src={movie?.video}
                     type='video/mp4'
                     title={movie?.name}
                  />
               </video>
            ) : (
               <div className='w-full h-full rounded-lg overflow-hidden relative'>
                  {isLoading ? (
                     <div className={sameClass}>
                        <Loader />
                     </div>
                  ) : isError ? (
                     <div className={sameClass}>
                        <div className='flex-colo w-24 p-5 rounded-full bg-dry text-subMain text-4xl mb-4'>
                           <RiMovie2Line />
                        </div>
                        <p className='text-border text-sm'>{isError}</p>
                     </div>
                  ) : (
                     <>
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                           <button
                              onClick={() => setPlay(true)}
                              className='bg-main text-subMain flex-colo p-5 rounded-full'
                           >
                              <FaPlay />
                           </button>
                        </div>
                        <img
                           src={movie?.image ? movie.image : NoImage}
                           alt={movie?.name}
                           className='w-full h-full object-cover rounded-lg'
                        />
                     </>
                  )}
               </div>
            )}
         </div>
      </Layout>
   );
};

export default WatchPage;
