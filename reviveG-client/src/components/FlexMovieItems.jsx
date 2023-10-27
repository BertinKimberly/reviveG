import React from "react";
import { FaRegCalendarAlt, FaStopwatch } from "react-icons/fa";

const FlexMovieItems = ({ movie }) => {
   return (
      <>
         <div className='flex items-center gap-2'>
            <span className='text-sm font-medium'>{movie.category}</span>
         </div>
         <div className='flex items-center gap-2'>
            <FaRegCalendarAlt className='text-subMain w-3 h-3' />
            <span className='text-sm font-medium'>{movie.year}</span>
         </div>
         <div className='flex items-center gap-2'>
            <FaStopwatch className='text-subMain w-3 h-3' />
            <span className='text-sm font-medium'>{movie.time}</span>
         </div>
      </>
   );
};

export default FlexMovieItems;
