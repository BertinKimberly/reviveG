import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import { Movies } from "../../../data/MoviesData";
import Table from "../../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Notifications/Loader";
import { Empty } from "../../../components/Notifications/Empty";

const MoviesList = () => {
   const dispatch = useDispatch();
   const { isLoading, isError, movies, pages, page } = useSelector(
      (state) => state.getAllMovies
   );

   useEffect(() => {
      //errors
      if (isError) {
         TransformStream.error(isError);
      }
      dispatch(getAllMoviesAction({}));
   }, [dispatch, isError]);

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
               <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                  Delete All
               </button>
            </div>
            {isLoading ? (
               <Loader />
            ) : movies.length > 0 ? (
               <>
                  <Table
                     data={movies}
                     admin={false}
                  />
                  <div className='w-full flex-rows md:my-20 my-10 gap-6'>
                     <button
                        onClick={prevPage}
                        disabled={page === 1}
                        className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain'
                     >
                        <TbPlayerTrackPrev className='text-xl' />
                     </button>
                     <button
                        onClick={nextPage}
                        disabled={page === pages}
                        className='text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain'
                     >
                        <TbPlayerTrackNext className='text-xl' />
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
