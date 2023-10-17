import React, { useEffect } from "react";
import Table from "../../components/Table";
import Sidebar from "./Sidebar";
import { Movies } from "../../data/MoviesData";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMoviesAction } from "../../redux/Actions/userActions";
import Loader from "../../components/Notifications/Loader";

const FavoriteMovies = () => {
   const dispatch = useDispatch();

   const { isLoading, isError, likedMovies } = useSelector(
      (state) => state.userGetFavoriteMovies
   );

   //useffect

   useEffect(() => {
      dispatch(getFavoriteMoviesAction());
      if (isError) {
         toast.error(isError);
         dispatch({ type: "GET_FAVORITE_MOVIES_RESET" });
      }
   }, [dispatch, isError]);
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Favorite Movies</h2>
               <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'>
                  Delete All
               </button>
            </div>
            {isLoading ? (
               <Loader />
            ) : likedMovies.length > 0 ? (
               <Table
                  data={likedMovies}
                  admin={false}
               />
            ) : (
               <p>Empty</p>
            )}
         </div>
      </Sidebar>
   );
};

export default FavoriteMovies;
