import * as moviesConstants from "../Constants/moviesConstants";

//GET ALL MOVIES

export const moviesListReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case moviesConstants.MOVIE_DETAILS_REQUEST:
         return { isLoading: true, movies: [] };
      case moviesConstants.MOVIE_DETAILS_SUCCESS:
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

//get random movies

export const moviesRandomReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case moviesConstants.MOVIES_RANDOM_REQUEST:
         return { isLoading: true };
      case moviesConstants.MOVIES_RANDOM_SUCCESS:
         return {
            isLoading: false,
            movies: action.payload.movies,
         };
      case moviesConstants.MOVIES_RANDOM_FAIL:
         return { isLoading: false, isError: action.payload };

      default:
         return state;
   }
};

//get movie by ID

export const movieDetailsReducer = (state = { movie: {} }, action) => {
   switch (action.type) {
      case moviesConstants.MOVIES_LIST_REQUEST:
         return { isLoading: true };
      case moviesConstants.MOVIE_DETAILS_SUCCESS:
         return {
            isLoading: false,
            movie: action.payload,
         };
      case moviesConstants.MOVIE_DETAILS_FAIL:
         return { isLoading: false, isError: action.payload };
      case moviesConstants.MOVIE_DETAILS_RESET:
         return {};

      default:
         return state;
   }
};

//get top rated movies

export const movieTopRatedReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case moviesConstants.MOVIE_TOP_RATED_REQUEST:
         return { isLoading: true, movies: [] };
      case moviesConstants.MOVIE_TOP_RATED_SUCCESS:
         return {
            isLoading: false,
            movies: action.payload,
         };
      case moviesConstants.MOVIE_TOP_RATED_FAIL:
         return { isLoading: false, isError: action.payload };

      default:
         return state;
   }
};

//create review

export const createReviewReducer = (state = {}, action) => {
   switch (action.type) {
      case moviesConstants.CREATE_REVIEW_REQUEST:
         return { isLoading: true, movies: [] };
      case moviesConstants.CREATE_REVIEW_SUCCESS:
         return {
            isLoading: false,
            isSuccess: true,
         };
      case moviesConstants.CREATE_REVIEW_FAIL:
         return { isLoading: false, isError: action.payload };
      case moviesConstants.CREATE_REVIEW_RESET:
         return {};
      default:
         return state;
   }
};

//delete movie

export const deleteMovieReducer = (state = {}, action) => {
   switch (action.type) {
      case moviesConstants.DELETE_MOVIE_REQUEST:
         return { isLoading: true };
      case moviesConstants.DELETE_MOVIE_SUCCESS:
         return {
            isLoading: false,
            isSuccess: true,
         };
      case moviesConstants.DELETE_MOVIE_FAIL:
         return { isLoading: false, isError: action.payload };
      default:
         return state;
   }
};

//delete all movies

export const deleteAllMoviesReducer = (state = {}, action) => {
   switch (action.type) {
      case moviesConstants.DELETE_ALL_REQUEST:
         return { isLoading: true };
      case moviesConstants.DELETE_ALL_SUCCESS:
         return {
            isLoading: false,
            isSuccess: true,
         };
      case moviesConstants.DELETE_ALL_FAIL:
         return { isLoading: false, isError: action.payload };
      default:
         return state;
   }
};

//create movie

export const createMovieReducer = (state = {}, action) => {
   switch (action.type) {
      case moviesConstants.CREATE_MOVIE_REQUEST:
         return { isLoading: true };
      case moviesConstants.CREATE_MOVIE_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case moviesConstants.CREATE_MOVIE_FAIL:
         return { isLoading: false, isError: action.payload };

      case moviesConstants.CREATE_MOVIE_RESET:
         return {};
      default:
         return state;
   }
};
//casts

export const CastsReducer = (state = { casts: [] }, action) => {
   switch (action.type) {
      case moviesConstants.ADD_CAST:
         return { casts: [...state.casts, action.payload] };
      case moviesConstants.EDIT_CAST:
         const updatedCasts = state.casts.map((cast) =>
            cast.id === action.payload.id ? action.payload : cast
         );
         return { casts: updatedCasts };
      case moviesConstants.DELETE_CAST:
         return {
            ...state,
            casts: state.casts.filter((cast) => cast.id !== action.payload),
         };
      case moviesConstants.RESET_CAST:
         return { casts: [] };
      default:
         return state;
   }
};

//UPDATE MOVIE

export const updateMovieReducer = (state = {}, action) => {
   switch (action.type) {
      case moviesConstants.UPDATE_MOVIE_REQUEST:
         return { isLoading: true };
      case moviesConstants.UPDATE_MOVIE_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case moviesConstants.UPDATE_MOVIE_FAIL:
         return { isLoading: false, isError: action.payload };
      case moviesConstants.UPDATE_MOVIE_RESET:
         return {};
      default:
         return state;
   }
};
