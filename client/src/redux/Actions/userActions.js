import * as userConstants from "../Constants/userConstants";
import * as userApi from "../API/userServices";
import toast from "react-hot-toast";

//login action

const loginAction = (user) => async (dispatch) => {
   try {
      dispatch({ type: userConstants.USER_LOGIN_REQUEST });
      const data = await userApi.loginService(user);

      dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: data });
      toast.success("login Successfull");
   } catch (error) {
      dispatch({ type: userConstants.USER_LOGIN_FAIL, payload: error });
      toast.error(error);
   }
};
