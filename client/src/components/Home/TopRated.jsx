import React, { useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill, BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../data/MoviesData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Stars";
import { Autoplay, Navigation } from "swiper/modules";

const SwiperTop = ({ prevEl, nextEl, movies }) => {
   return (
      <Swiper
         navigation={{ nextEl, prevEl }}
         slidesPerView={4}
         spaceBetween={40}
         autoplay={true}
         speed={1000}
         loop={true}
         modules={[Navigation, Autoplay]}
      >
         {movies.map((movie, index) => (
            <SwiperSlide key={index}>
               <div className='p-4 h-rate border hovered border-border bg-dry rounded-lg overflow-hidden'>
                  <img
                     src=''
                     alt={movie.name}
                     className='w-full h-full object-cover rounded-lg '
                  />
                  <div className='px-4 gap-6 hovers text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                     <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white '>
                        <FaHeart />
                     </button>
                     <Link
                        className='font-semibold text-xl trancuted line-clamp-2'
                        to={`/movie/${movie._id}`}
                     >
                        {movie.name}
                     </Link>
                     <div className='flex gap-2 text-star'>
                        <Rating value={movie.rate} />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

const TopRated = ({ movies, isLoading }) => {
   const [nextEl, setNextEl] = useState(null);
   const [prevEl, setPrevEl] = useState(null);

   const classNames =
      "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo  bg-subMain text-white";
   return (
      <div className='my-16'>
         <Titles
            title='Top Rated'
            Icon={BsBookmarkStarFill}
         />
         {isLoading ? (
            <Loader />
         ) : movies?.length > 0 ? (
            <SwiperTop
               nextEl={nextEl}
               prevEl={prevEl}
               movies={movies}
            />
         ) : (
            <Empty message='No movies' />
         )}
         <div className='mt-10'>
            <div className='w-full px-1 flex-rows gap-6 pt-12 '>
               <button
                  className={classNames}
                  ref={(node) => setPrevEl(node)}
               >
                  <BsCaretLeft />
               </button>
               <button
                  className={classNames}
                  ref={(node) => setNextEl(node)}
               >
                  <BsCaretRight />
               </button>
            </div>
         </div>
      </div>
   );
};

export default TopRated;
