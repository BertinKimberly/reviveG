import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IfMovieLiked, LikeMovie } from "../../context/Functionalities";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Notifications/Loader";
import NoImage from "../../assets/noImage.jpg";
import { Autoplay } from "swiper/modules";
import { Empty } from "../Notifications/Empty";

const SwiperTop = ({ sameClass, movies }) => {
   const { isLoading } = useSelector((state) => state.userGetFavoriteMovies);
   const dispatch = useDispatch();
   const { userInfo } = useSelector((state) => state.userLogin);

   //if liked function

   const isLiked = (movie) => {
      return IfMovieLiked(movie);
   };
   return (
      <Swiper
         direction='vertical'
         slidesPerView={1}
         loop={true}
         speed={1000}
         modules={[Autoplay]}
         autoplay={{ delay: 4000, disableOnInteraction: false }}
         className={sameClass}
      >
         {movies?.slice(0, 6).map((movie, index) => (
            <SwiperSlide
               key={index}
               className='relative rounded overflow-hidden'
            >
               <img
                  src={movie?.image ? movie.image : NoImage}
                  alt={movie?.name}
                  className='w-full h-full object-cover opacity-10 bg-main'
               />
               <div className='absolute xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 linear-bg'>
                  <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                     {movie.name}
                  </h1>
                  <div className='flex gap-5 items-center text-dryGray'>
                     <FlexMovieItems movie={movie} />
                  </div>
                  <div className='flex gap-5 items-center'>
                     <Link
                        to={`/movie/${movie?._id}`}
                        className='bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'
                     >
                        Watch
                     </Link>
                     <button
                        onClick={() => LikeMovie(movie, dispatch, userInfo)}
                        disabled={isLiked(movie) || isLoading}
                        className='bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30 '
                     >
                        <FaHeart />
                     </button>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

const Banner = ({ movies, isLoading }) => {
   const sameClass = "w-full flex-colo xl:h-96 bg-dry lg:h-64 h-48";
   return (
      <div className='relative w-full  '>
         {isLoading ? (
            <Loader />
         ) : movies?.length > 0 ? (
            <SwiperTop
               sameClass={sameClass}
               movies={movies}
            />
         ) : (
            <Empty message='No movies' />
         )}
      </div>
   );
};

export default Banner;
