import * as userConstants from "../Constants/userConstants";

//REGISTER

export const userLoginReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_REGISTER_REQUEST:
         return { isLoading: true };
      case userConstants.USER_REGISTER_SUCCESS:
         return { isLoading: false, userInfo: action.payload, isSuccess: true };
      case userConstants.USER_REGISTER_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_REGISTER_RESET:
         return {};
      case userConstants.USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

//REGISTER

export const userRegisterReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_REGISTER_REQUEST:
         return { isLoading: true };
      case userConstants.USER_REGISTER_SUCCESS:
         return { isLoading: false, userInfo: action.payload, isSuccess: true };
      case userConstants.USER_REGISTER_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_REGISTER_RESET:
         return {};

      default:
         return state;
   }
};

//UPDATE PROFILE

export const userUpdateProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_UPDATE_PROFILE_REQUEST:
         return { isLoading: true };
      case userConstants.USER_UPDATE_PROFILE_SUCCESS:
         return { isLoading: false, userInfo: action.payload, isSuccess: true };
      case userConstants.USER_UPDATE_PROFILE_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_UPDATE_PROFILE_RESET:
         return {};

      default:
         return state;
   }
};

//DELETE PROFILE

export const userDeleteProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_DELETE_PROFILE_REQUEST:
         return { isLoading: true };
      case userConstants.USER_DELETE_PROFILE_SUCCESS:
         return { isLoading: false, isSuccess: true };
      case userConstants.USER_DELETE_PROFILE_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_DELETE_PROFILE_RESET:
         return {};

      default:
         return state;
   }
};

//CHANGE PASSWORD

export const userChangePasswordReducer = (state = {}, action) => {
   switch (action.type) {
      case userConstants.USER_CHANGE_PASSWORD_REQUEST:
         return { isLoading: true };
      case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
         return {
            isLoading: false,
            isSuccess: true,
            message: action.payload.message,
         };
      case userConstants.USER_CHANGE_PASSWORD_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.USER_CHANGE_PASSWORD_RESET:
         return {};

      default:
         return state;
   }
};

// GET FAVORITE MOVIES

export const userGetFavoriteMoviesReducer = (
   state = {
      likedMovies: [],
   },
   action
) => {
   switch (action.type) {
      case userConstants.GET_FAVORITE_MOVIES_REQUEST:
         return { isLoading: true };
      case userConstants.GET_FAVORITE_MOVIES_SUCCESS:
         return {
            isLoading: false,
            likedMovies: action.payload,
         };
      case userConstants.GET_FAVORITE_MOVIES_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.GET_FAVORITE_MOVIES_RESET:
         return {};

      default:
         return state;
   }
};

//DELETE FAVORITE MOVIES

export const userDeleteFavoriteMoviesReducer = (
   state = {
      likedMovies: [],
   },
   action
) => {
   switch (action.type) {
      case userConstants.DELETE_FAVORITE_MOVIES_REQUEST:
         return { isLoading: true };
      case userConstants.DELETE_FAVORITE_MOVIES_SUCCESS:
         return {
            isLoading: false,
            isSuccess:true,
         };
      case userConstants.DELETE_FAVORITE_MOVIES_FAIL:
         return { isLoading: false, isError: action.payload };
      case userConstants.DELETE_FAVORITE_MOVIES_RESET:
         return {};

      default:
         return state;
   }
};
