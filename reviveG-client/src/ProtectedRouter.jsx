import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

//public protection
export const ProtectedRouter = () => {
   const { userInfo } = useSelector((state) => state.userLogin);
   return userInfo?.token ? <Outlet /> : <Navigate to='/login' />;
};

//admin router protection

export function AdminProtectedRouter() {
   const { userInfo } = useSelector((state) => state.userLogin);
   return userInfo?.token ? (
      userInfo?.isAdmin ? (
         <Outlet />
      ) : (
         <Navigate to='/*' />
      )
   ) : (
      <Navigate to='/login' />
   );
}
