import React from "react";
import Titles from "../Titles";

const MovieRates = ({ movie }) => {
   const Ratings = [
      {
         title: "0-Poor",
         value: 0,
      },
      {
         title: "1- Fair",
         value: 1,
      },
      {
         title: "2 - Good",
         value: 2,
      },
      {
         title: "3 - Very Good",
         value: 3,
      },
      {
         title: "4 - Excellent",
         value: 4,
      },
      {
         title: "5 - Masterpiece",
         value: 5,
      },
   ];
   return (
      <div className='my-12'>
         <Titles
            title='Reviews'
            Icon={BsBookmarkStarFill}
         />
         <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 pt-10 px-2 sm:p-20 rounded'>
            <div className='xl:col-span-2 w-full flex flex-col gap-8'>
               <h3 className='text-xl text-text font-semibold'>
                  Review "{movie?.name}"
               </h3>
               <p className='text-sm leading-7 font-medium text-border'>
                  Write a review for this movie. It will be posted on this page
               </p>
               <div className='text-sm w-full'>
                
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieRates;
