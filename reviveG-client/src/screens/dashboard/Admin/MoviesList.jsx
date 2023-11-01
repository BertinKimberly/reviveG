import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import Table from "../../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Notifications/Loader";
import { Empty } from "../../../components/Notifications/Empty";
import toast from "react-hot-toast";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import {
   deleteAllMoviesAction,
   deleteMovieAction,
   getAllMoviesAction,
} from "../../../redux/Actions/MoviesActions";

const MoviesList = () => {
   const dispatch = useDispatch();
   //all movies
   const { isLoading, isError, movies, pages, page } = useSelector(
      (state) => state.getAllMovies
   );

   //delete
   const { isLoading: deleteLoading, isError: deleteError } = useSelector(
      (state) => state.deleteMovie
   );

   //delete all
   const { isLoading: allLoading, isError: allError } = useSelector(
      (state) => state.deleteAllMovies
   );

   //delete movie handler

   const deleteMovieHandler = (id) => {
      window.confirm("Are you sure you want to delete this movie ?") &&
         dispatch(deleteMovieAction(id));
   };

   //delete all movies handler

   const deleteAllMoviesHandler = () => {
      confirm("Are you sure you want to delete all movies ? ") &&
         dispatch(deleteAllMoviesAction());
   };

   //useEffect

   useEffect(() => {
      //errors
      if (isError || deleteError || allError) {
         toast.error(isError || deleteError || allError);
      }
      dispatch(getAllMoviesAction({}));
   }, [dispatch, isError, deleteError, allError]);

   //pagination next and prev pages

   const nextPage = () => {
      dispatch(
         getAllMoviesAction({
            pageNumber: page + 1,
         })
      );
   };
   const prevPage = () => {
      dispatch(
         getAllMoviesAction({
            pageNumber: page - 1,
         })
      );
   };
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'> Movies List</h2>
               {movies?.length > 0 && (
                  <button
                     disabled={allLoading}
                     onClick={deleteAllMoviesHandler}
                     className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'
                  >
                     {allLoading ? "Deleting..." : " Delete All"}
                  </button>
               )}
            </div>
            {isLoading || deleteLoading ? (
               <Loader />
            ) : movies?.length > 0 ? (
               <>
                  <Table
                     data={movies}
                     admin={false}
                     onDeleteHandler={deleteMovieHandler}
                  />
                  <div className='w-full flex-rows md:my-20 my-10 gap-6'>
                     <button
                        onClick={prevPage}
                        disabled={page === 1}
                        className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain'
                     >
                        <BsCaretLeft className='text-xl' />
                     </button>
                     <button
                        onClick={nextPage}
                        disabled={page === pages}
                        className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain'
                     >
                        <BsCaretRight className='text-xl' />
                     </button>
                  </div>
               </>
            ) : (
               <Empty message='You have no movies' />
            )}
         </div>
      </Sidebar>
   );
};

export default MoviesList;
