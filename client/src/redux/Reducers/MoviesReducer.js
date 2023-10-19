import * as moviesConstants from "../Constants/moviesConstants";

//GET ALL MOVIES

export const moviesListReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case moviesConstants.MOVIES_LIST_REQUEST:
         return { isLoading: true, movies: [] };
      case moviesConstants.MOVIES_LIST_SUCCESS:
         return {
            isLoading: false,
            movies: action.payload.movies,
            pages: action.payload.pages,
            page: action.payload.page,
            totalMovies: action.payload.totalMovies,
         };
      case moviesConstants.MOVIES_LIST_FAIL:
         return { isLoading: false, isError: action.payload };

      default:
         return state;
   }
};
