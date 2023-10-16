import * as userConstants from "../Constants/userConstants";
import * as userApi from "../API/userServices";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../Protection";

//login action

export const loginAction = (datas) => async (dispatch) => {
   try {
      dispatch({ type: userConstants.USER_LOGIN_REQUEST });
      const response = await userApi.loginService(datas);

      dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
      toast.success("login Successfull");
   } catch (error) {
      ErrorsAction(error, dispatch, userConstants.USER_LOGIN_FAIL);
   }
};

//register action

export const registerAction = (datas) => async (dispatch) => {
   try {
      dispatch({ type: userConstants.USER_REGISTER_REQUEST });
      const response = await userApi.registerService(datas);
      dispatch({
         type: userConstants.USER_REGISTER_SUCCESS,
         payload: response,
      });
      dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
   } catch (error) {
      ErrorsAction(error, dispatch, userConstants.USER_REGISTER_FAIL);
   }
};

export const logoutAction = () => (dispatch) => {
   userApi.logoutService();
   dispatch({ type: userConstants.USER_LOGOUT });
   dispatch({ type: userConstants.USER_LOGIN_RESET });
   dispatch({ type: userConstants.USER_REGISTER_RESET });
};

//update profile

export const updateProfileAction = (user) => async (dispatch, getState) => {
   try {
      dispatch({ type: userConstants.USER_UPDATE_PROFILE_REQUEST });
      const response = await userApi.updateProfileService(
         user,
         tokenProtection(getState)
      );

      dispatch({
         type: userConstants.USER_UPDATE_PROFILE_SUCCESS,
         payload: response,
      });
      toast.success("Profile Updated");
      dispatch({
         type: userConstants.USER_LOGIN_SUCCESS,
         payload: response,
      });
   } catch (error) {
      ErrorsAction(error, dispatch, userConstants.USER_UPDATE_PROFILE_FAIL);
   }
};

export const deleteProfileAction = () => async (dispatch, getState) => {
   try {
      dispatch({ type: userConstants.USER_DELETE_PROFILE_REQUEST });
      await userApi.deleteProfileService(tokenProtection(getState));
      dispatch({ type: userConstants.USER_DELETE_PROFILE_SUCCESS });
      toast.success("Profile Deleted");
      dispatch(logoutAction());
   } catch (error) {
      ErrorsAction(error, dispatch, userConstants.USER_DELETE_PROFILE_FAIL);
   }
};

//change password action

export const changePasswordAction =
   (passwords) => async (dispatch, getState) => {
      try {
         dispatch({ type: userConstants.USER_CHANGE_PASSWORD_REQUEST });
         const response = await userApi.changePasswordService(
            passwords,
            tokenProtection(getState)
         );

         dispatch({
            type: userConstants.USER_CHANGE_PASSWORD_SUCCESS,
            payload: response,
         });
      } catch (error) {
         ErrorsAction(error, dispatch, userConstants.USER_CHANGE_PASSWORD_FAIL);
      }
   };
