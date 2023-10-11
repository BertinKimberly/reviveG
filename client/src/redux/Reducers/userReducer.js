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
