import * as moviesConstants from "../Constants/moviesConstants";
import * as moviesAPIs from "../API/MoviesServices";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../Protection";
//get all movies action

export const getAllMoviesAction =
   ({ category, time, language, rate, year, search, pageNumber }) =>
   async (dispatch) => {
      try {
         dispatch({
            type: moviesConstants.MOVIES_LIST_REQUEST,
         });
         const response = await moviesAPIs.getAllMoviesService(
            (category = ""),
            (time = ""),
            (language = ""),
            (rate = ""),
            (year = ""),
            (search = ""),
            (pageNumber = "")
         );
         dispatch({
            type: moviesConstants.MOVIES_LIST_SUCCESS,
            payload: response,
         });
      } catch (error) {
         ErrorsAction(error, dispatch, moviesConstants.MOVIES_LIST_FAIL);
      }
   };

//get random movies action

export const getRandomMoviesAction = () => async (dispatch) => {
   try {
      dispatch({ type: moviesConstants.MOVIES_RANDOM_REQUEST });
      const response = await moviesAPIs.getRandomMoviesService();
      dispatch({
         type: moviesConstants.MOVIES_RANDOM_SUCCESS,
         payload: response,
      });
   } catch (error) {
      ErrorsAction(error, dispatch, moviesConstants.MOVIES_RANDOM_FAIL);
   }
};

//get movie by id

export const getMovieByIdAction = (id) => async (dispatch) => {
   try {
      dispatch({ type: moviesConstants.MOVIE_DETAILS_REQUEST });
      const response = await moviesAPIs.getMovieByIdService(id);
      dispatch({
         type: moviesConstants.MOVIE_DETAILS_SUCCESS,
         payload: response,
      });
   } catch (error) {
      ErrorsAction(error, dispatch, moviesConstants.MOVIE_DETAILS_FAIL);
   }
};

export const getTopRatedMovieAction = () => async (dispatch) => {
   try {
      dispatch({ type: moviesConstants.MOVIE_TOP_RATED_REQUEST });
      const response = await moviesAPIs.getTopRatedMovieService();
      dispatch({
         type: moviesConstants.MOVIE_TOP_RATED_SUCCESS,
         payload: response,
      });
   } catch (error) {
      ErrorsAction(error, dispatch, moviesConstants.MOVIE_TOP_RATED_FAIL);
   }
};

//review movie action

export const reviewMovieAction =
   ({ id, review }) =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: moviesConstants.CREATE_REVIEW_REQUEST });
         const response = await moviesAPIs.reviewMovieService(
            tokenProtection(getState),
            id,
            review
         );
         dispatch({
            type: moviesConstants.CREATE_REVIEW_SUCCESS,
            payload: response,
         });
         toast.successs("Review added successfully");
         dispatch({ type: moviesConstants.CREATE_REVIEW_RESET });
         dispatch(getMovieByIdAction(id));
      } catch (error) {
         ErrorsAction(error, dispatch, moviesConstants.CREATE_REVIEW_FAIL);
      }
   };

//delete movie action

export const deleteMovieAction = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: moviesConstants.DELETE_MOVIE_REQUEST });
      const response = await moviesAPIs.deleteMovieService(
         tokenProtection(getState),
         id
      );
      dispatch({
         type: moviesConstants.DELETE_MOVIE_SUCCESS,
         payload: response,
      });
      toast.successs("Movie deleted successfully");
      dispatch(getAllMoviesAction());
   } catch (error) {
      ErrorsAction(error, dispatch, moviesConstants.DELETE_MOVIE_FAIL);
   }
};

//delete all movies action

export const deleteAllMoviesAction = () => async (dispatch, getState) => {
   try {
      dispatch({ type: moviesConstants.DELETE_ALL_MOVIES_REQUEST });
      const response = await moviesAPIs.deleteAllMoviesService(
         tokenProtection(getState)
      );
      dispatch({
         type: moviesConstants.DELETE_ALL_MOVIES_SUCCESS,
         payload: response,
      });
      toast.success("All movies deleted successfully");
      dispatch(getAllMoviesAction({}));
   } catch (error) {
      ErrorsAction(error, dispatch, moviesConstants.DELETE_ALL_MOVIES_FAIL);
   }
};
