import React, { useEffect } from "react";
import { Aos } from "aos";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import NotFound from "./screens/NotFound";
import MoviesPage from "./screens/Movies";
import SingleMovie from "./screens/SingleMovie";
import WatchPage from "./screens/WatchPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/dashboard/Profile";
import Password from "./screens/dashboard/Password";
import FavoriteMovies from "./screens/dashboard/FavoriteMovies";
import MoviesList from "./screens/dashboard/Admin/MoviesList";
import Dashboard from "./screens/dashboard/Admin/Dashboard";
import Categories from "./screens/dashboard/Admin/Categories";
import Users from "./screens/dashboard/Admin/Users";
import AddMovie from "./screens/dashboard/Admin/AddMovie";
import ScrollOnTop from "./ScrollOnTop";
import ToastContainer from "./components/Notifications/ToastContainer";
import { AdminProtectedRouter, ProtectedRouter } from "./ProtectedRouter";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "./redux/Actions/CategoriesActions";
import { getFavoriteMoviesAction } from "./redux/Actions/userActions";

const App = () => {
   Aos.init({
      duration: 1000,
   });
   const { userInfo } = useSelector((state) => state.userLogin);
   const { isError, isSuccess } = useSelector((state) => state.userLikeMovie);
   const { isError: catError } = useSelector((state) => state.categoryGetAll);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllCategoriesAction());
      dispatch(getAllCategoriesAction({}));

      if (userInfo) {
         dispatch(getFavoriteMoviesAction());
      }
      if (isError || catError) {
         toast.error("Something went wrong, please try again later");
         dispatch({ type: "LIKE_MOVIE_RESET" });
      }
      if (isSuccess) {
         dispatch({ type: "LIKE_MOVIE_RESET" });
      }
   }, [dispatch, userInfo, isError, catError, isSuccess]);
   return (
      <>
         <ScrollOnTop>
            <Routes>
               {/* ****************PUBLIC ROUTERS*********************** */}
               <Route
                  path='/'
                  element={<HomeScreen />}
               />
               <Route
                  path='/about-us'
                  element={<AboutUs />}
               />
               <Route
                  path='/contact-us'
                  element={<ContactUs />}
               />
               <Route
                  path='/movies'
                  element={<MoviesPage />}
               />
               <Route
                  path='/movies/:search'
                  element={<MoviesPage />}
               />
               <Route
                  path='/movie/:id'
                  element={<SingleMovie />}
               />
               <Route
                  path='/watch/:id'
                  element={<WatchPage />}
               />
               <Route
                  path='/login'
                  element={<Login />}
               />
               <Route
                  path='/register'
                  element={<Register />}
               />
               <Route
                  path='*'
                  element={<NotFound />}
               />
               {/* ****************PRIVATE PUBLIC ROUTERS*********************** */}
               <Route element={<ProtectedRouter />}>
                  <Route
                     path='/profile'
                     element={<Profile />}
                  />
                  <Route
                     path='/password'
                     element={<Password />}
                  />
                  <Route
                     path='/favorites'
                     element={<FavoriteMovies />}
                  />
               </Route>

               {/* ****************ADMIN ROUTERS*********************** */}
               <Route element={<AdminProtectedRouter />}>
                  <Route
                     path='/moviesList'
                     element={<MoviesList />}
                  />
                  <Route
                     path='/dashboard'
                     element={<Dashboard />}
                  />
                  <Route
                     path='/categories'
                     element={<Categories />}
                  />
                  <Route
                     path='/users'
                     element={<Users />}
                  />
                  <Route
                     path='/addmovie'
                     element={<AddMovie />}
                  />
               </Route>
            </Routes>
         </ScrollOnTop>
         <ToastContainer />
      </>
   );
};

export default App;
