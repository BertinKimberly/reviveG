import { USER_LOGOUT } from "./Constants/userConstants";

export const ErrorsAction = (error, dispatch, action) => {
   const message =
      error.response && error.response.data.message
         ? error.response.data.message
         : error.message;
   if (message === "Not authorized,token failed") {
     //logout if token fails
   }
   return dispatch({ type: action, payload: message });
};
