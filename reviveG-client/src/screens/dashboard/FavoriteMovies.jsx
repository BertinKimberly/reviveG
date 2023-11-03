import React, { useContext, useEffect } from "react";
import Table from "../../components/Table";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
   deleteFavoriteMoviesAction,
   getFavoriteMoviesAction,
} from "../../redux/Actions/userActions";
import Loader from "../../components/Notifications/Loader";
import { Empty } from "../../components/Notifications/Empty";
import { SidebarContext } from "../../context/DrawerContext";
import { DownloadVideo } from "../../context/Functionalities";

const FavoriteMovies = () => {
   const dispatch = useDispatch();
   const { progress, setProgress } = useContext(SidebarContext);
   const { isLoading, isError, likedMovies } = useSelector(
      (state) => state.userGetFavoriteMovies
   );

   //delete
   const {
      isLoading: deleteLoading,
      isError: deleteError,
      isSuccess,
   } = useSelector((state) => state.userDeleteFavoriteMovies);

   //delete movies handler

   const deleteMoviesHandler = () => {
      window.confirm("Are you sure you want to delete all movies") &&
         dispatch(deleteFavoriteMoviesAction());
   };

   //download video
   const DownloadMovieVideo = async (videoUrl, name) => {
      await DownloadVideo(videoUrl, setProgress).then((data) => {
         setProgress(0);
         FileSaver.saveAs(data, name);
      });
   };

   //useffect

   useEffect(() => {
      dispatch(getFavoriteMoviesAction());
      if (isError || deleteError) {
         toast.error(isError || deleteError);
         dispatch({
            type: isError
               ? "GET_FAVORITE_MOVIES_RESET"
               : "DELETE_FAVORITE_MOVIES_RESET",
         });
      }
   }, [dispatch, isError, deleteError, isSuccess]);

   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
               <h2 className='text-xl font-bold'>Favorite Movies</h2>
               {likedMovies?.length > 0 && (
                  <button
                     disabled={deleteLoading}
                     onClick={deleteMoviesHandler}
                     className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded'
                  >
                     {deleteLoading ? "Deleting..." : "  Delete All"}
                  </button>
               )}
            </div>
            {isLoading ? (
               <Loader />
            ) : likedMovies?.length > 0 ? (
               <Table
                  data={likedMovies}
                  admin={false}
                  downloadVideo={DownloadMovieVideo}
                  progress={progress}
               />
            ) : (
               <Empty message='You have no favorite movies' />
            )}
         </div>
      </Sidebar>
   );
};

export default FavoriteMovies;
