import React, { useEffect } from "react";
import {
   deleteUserAction,
   getAllUsersAction,
} from "../../../redux/Actions/userActions";
import { Empty } from "../../../components/Notifications/Empty";
import Table2 from "../../../components/Table2";
import Loader from "../../../components/Notifications/Loader";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import toast from "react-hot-toast";
const Users = () => {
   const dispatch = useDispatch();

   const { isLoading, isError, users } = useSelector(
      (state) => state.adminGetAllUsers
   );

   //delete
   const {
      isLoading: deleteLoading,
      isError: deleteError,
      isSuccess,
   } = useSelector((state) => state.adminDeleteUser);

   //delete user handler

   const deleteUserHandler = (id) => {
      if (window.confirm("Are you sure you want to delete this user?")) {
         dispatch(deleteUserAction(id));
      }
   };

   //useffect

   useEffect(() => {
      dispatch(getAllUsersAction());
      if (isError || deleteError) {
         toast.error(isError || deleteError);
         dispatch({
            type: isError ? "GET_ALL_USERS_RESET" : "DELETE_USER_RESET",
         });
      }
   }, [dispatch, isError, deleteError, isSuccess]);
   return (
      <Sidebar>
         <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-4 flex flex-col '>
               <h2 className='text-xl font-bold'> Users</h2>
               {isLoading ? (
                  <Loader />
               ) : users?.length > 0 ? (
                  <Table2
                     data={users}
                     users={users}
                     admin={true}
                     onDeleteFunction={deleteUserHandler}
                  />
               ) : (
                  <Empty message='You dont have any user' />
               )}
            </div>
         </div>
      </Sidebar>
   );
};

export default Users;
