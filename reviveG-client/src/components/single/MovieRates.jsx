import React, { useEffect, useState } from "react";
import Titles from "../Titles";
import { Message, Select } from "../../components/UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import { ReviewValidation } from "../Validation/MovieValidation";
import { Link } from "react-router-dom";
import { reviewMovieAction } from "../../redux/Actions/MoviesActions";
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { BsBookmarkStarFill } from "react-icons/bs";
import Rating from "../Stars";
import { InlineError } from "../Notifications/Error";
import { Empty } from "../Notifications/Empty";
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
const MovieRates = ({ movie }) => {
   const dispatch = useDispatch();
   //use selector

   const { isLoading, isError } = useSelector((state) => state.createReview);
   const { userInfo } = useSelector((state) => state.userLogin);

   //validate review

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(ReviewValidation),
   });

   //onSubmit
   const onSubmit = (data) => {
      dispatch(
         reviewMovieAction({
            id: movie?._id,
            review: { ...data },
         })
      );
   };

   useEffect(() => {
      if (isError) {
         toast.error(isError);
         dispatch({ type: "CREATE_REVIEW_RESET" });
      }
   }, [isError, dispatch]);
   return (
      <div className='my-12'>
         <Titles
            title='Reviews'
            Icon={BsBookmarkStarFill}
         />
         <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 pt-10 px-2 sm:p-20 rounded'>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className='xl:col-span-2 w-full flex flex-col gap-8'
            >
               <h3 className='text-xl text-text font-semibold'>
                  Review "{movie?.name}"
               </h3>
               <p className='text-sm leading-7 font-medium text-border'>
                  Write a review for this movie. It will be posted on this page
               </p>
               <div className='text-sm w-full'>
                  <Select
                     label='Select Rating'
                     options={Ratings}
                     name='rating'
                     register={{ ...register("rating") }}
                  />
                  <div className='flex mt-4 text-lg gap-2 text-star'>
                     <Rating value={watch("rating", false)} />
                  </div>
                  {errors.rating && (
                     <InlineError message={errors.rating.message} />
                  )}
               </div>
               <div className='w-full'>
                  <Message
                     label='Message'
                     placeholder='make it short and sweet'
                     name='comment'
                     register={{ ...register("comment") }}
                  />
                  {errors.comment && (
                     <InlineError text={errors.comment.message} />
                  )}
               </div>
               {userInfo ? (
                  <button
                     disabled={isLoading}
                     type='submit'
                     className='bg-subMain text-white py-3 w-full rounded flex-colo'
                  >
                     {isLoading ? "Loading" : "Submit"}
                  </button>
               ) : (
                  <Link
                     to='/login'
                     className='bg-main border border-subMain text-white py-3 w-full rounded flex-colo'
                  >
                     Login to review this movie
                  </Link>
               )}
            </form>
            <div className='col-span-3  flex flex-col gap-6'>
               <h3 className='text-text font-semibold'>Reviews (56)</h3>
               <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-scroll'>
                  {movie?.reviews?.length > 0 ? (
                     movie?.reviews?.map((review) => (
                        <div
                           key={review?._id}
                           className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg'
                        >
                           <div className='col-span-2 hidden md:block'>
                              <img
                                 src={review.image}
                                 alt={review.username}
                                 className='w-full h-24 rounded-lg object-cover'
                              />
                           </div>
                           <div className='col-span-7 flex flex-col gap-2'>
                              <h2>{review?.fullName}</h2>
                              <p className='text-xs leading-6 font-medium text-text'>
                                 {review?.comment}
                              </p>
                           </div>
                           <div className='col-span-3 flex-rows border-l border-border text-xs gap-1 text-star '>
                              <Rating value={review?.rating} />
                           </div>
                        </div>
                     ))
                  ) : (
                     <Empty message='No reviews yet' />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieRates;
