import React from "react";
import { FaPlus, FaRegListAlt, FaUser } from "react-icons/fa";
import Table from "../../../components/Table";

import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../../redux/Actions/userActions";
import {
   deleteMovieAction,
   getAllMoviesAction,
} from "../../../redux/Actions/MoviesActions";
import { getAllCategoriesAction } from "../../../redux/Actions/CategoriesActions";
import Loader from "../../../components/Notifications/Loader";
import { Empty } from "../../../components/Notifications/Empty";

const Dashboard = () => {
   const dispatch = useDispatch();

   //use selectors
   const {
      isLoading: catLoading,
      isError: catError,
      categories,
   } = useSelector((state) => state.categoryGetAll);
   const {
      isLoading: userLoading,
      isError: userError,
      users,
   } = useSelector((state) => state.adminGetAllUsers);

   const { isLoading, isError, movies, totalMovies } = useSelector(
      (state) => state.getAllMovies
   );

   //delete
   const { isLoading: deleteLoading, isError: deleteError } = useSelector(
      (state) => state.deleteMovie
   );

   //delete movie handler

   const deleteMovieHandler = (id) => {
      window.confirm("Are you sure you want to delete this movie ?") &&
         dispatch(deleteMovieAction(id));
   };

   //useEffect

   useEffect(() => {
      //get all users
      dispatch(getAllUsersAction());

      //get all movies
      dispatch(getAllMoviesAction({}));

      //get all categories
      dispatch(getAllCategoriesAction({}));

      //errors
      if (isError || catError || userError || deleteError) {
         toast.error(isError || catError || userError || deleteError);
      }
   }, [dispatch, isError, catError, userError, deleteError]);

   //dashboard datas

   const DashboardData = [
      {
         bg: "bg-orange-600",
         icon: FaRegListAlt,
         title: "Total Movies",
         total: isLoading ? "Loading..." : totalMovies,
      },
      {
         bg: "bg-blue-700",
         icon: FaPlus,
         title: "Total Categories",
         total: catLoading ? "Loading..." : categories?.length,
      },
      {
         bg: "bg-green-600",
         icon: FaUser,
         title: "Total Users",
         total: userLoading ? "Loading..." : users?.length,
      },
   ];
   return (
      <Sidebar>
         <h2 className='text-xl font-bold'>Dashboard</h2>
         <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((data, index) => (
               <div
                  key={index}
                  className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'
               >
                  <div
                     className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
                  >
                     <data.icon />
                  </div>
                  <div className='col-span-3'>
                     <h2>{data.title}</h2>
                     <p className='text-text mt-2 font-bold'>{data.total}</p>
                  </div>
               </div>
            ))}
         </div>
         <h3 className='text-md font-medium mt-6'>Recent Movies</h3>
         {isLoading || deleteLoading ? (
            <Loader />
         ) : movies.length > 0 ? (
            <Table
               data={movies?.slice(0, 5)}
               admin={true}
               onDeleteHandler={deleteMovieHandler}
            />
         ) : (
            <Empty message='Empty' />
         )}
      </Sidebar>
   );
};

export default Dashboard;
