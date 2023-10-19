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
            category,
            time,
            language,
            rate,
            year,
            search,
            pageNumber
         );
         dispatch({
            type: moviesConstants.MOVIES_LIST_SUCCESS,
            payload: response,
         });
      } catch (error) {
         ErrorsAction(error, dispatch, moviesConstants.MOVIES_LIST_FAIL);
      }
   };
