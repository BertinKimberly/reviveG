import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
   userLoginReducer,
   userRegisterReducer,
   userUpdateProfileReducer,
   userDeleteProfileReducer,
   userChangePasswordReducer,
   userDeleteFavoriteMoviesReducer,
   userGetFavoriteMoviesReducer,
   adminGetAllUsersReducer,
   adminDeleteUserReducer,
} from "./Reducers/userReducer";
import {
   createCategoryReducer,
   deleteCategoryReducer,
   getAllCategoriesReducer,
   updateCategoryReducer,
} from "./Reducers/categoriesReducers";
import {
   movieDetailsReducer,
   movieTopRatedReducer,
   moviesListReducer,
   moviesRandomReducer,
} from "./Reducers/MoviesReducer";

const rootReducer = combineReducers({
   //user reducers
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userUpdateProfile: userUpdateProfileReducer,
   userDeleteProfile: userDeleteProfileReducer,
   userChangePassword: userChangePasswordReducer,
   userGerFavoriteMovies: userGetFavoriteMoviesReducer,
   userDeleteFavoriteMovies: userDeleteFavoriteMoviesReducer,
   adminGetAllUsers: adminGetAllUsersReducer,
   adminDeleteUser: adminDeleteUserReducer,

   //category reducers
   categoryGetAll: getAllCategoriesReducer,
   categoryCreate: createCategoryReducer,
   categoryUpdate: updateCategoryReducer,
   categoryDelete: deleteCategoryReducer,

   //movies reducer

   getAllMovies: moviesListReducer,
   getRandomMovies: moviesRandomReducer,
   getMovieById: movieDetailsReducer,
   getTopRatedMovie: movieTopRatedReducer,
});
//get userinfo from local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo"))
   : null;

//initial state

const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
   reducer: rootReducer,
   preloadedState: initialState,
});
