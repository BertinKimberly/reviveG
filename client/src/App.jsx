import React from "react";
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

const App = () => {
   Aos.init();
   return (
      <ScrollOnTop>
         <Routes>
            <Route
               path='/'
               element={<HomeScreen />}
            />
            <Route
               path='/about-us'
               element={<AboutUs />}
            />
            <Route
               path='/contac-us'
               element={<ContactUs />}
            />
            <Route
               path='/movies'
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
            <Route
               path='*'
               element={<NotFound />}
            />
         </Routes>
      </ScrollOnTop>
   );
};

export default App;
