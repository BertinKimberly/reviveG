import { getAllFaqsService } from "../API/faqService";
import * as faqsConstants from "../Constants/faqConstants";
export const getAllFaqsAction = () => async (dispatch) => {
   try {
      dispatch({ type: faqsConstants.GET_ALL_FAQS_REQUEST });
      const response = await getAllFaqsService();
      dispatch({
         type: faqsConstants.GET_ALL_FAQS_SUCCESS,
         payload: response.data,
      });
   } catch (error) {
      ErrorsAction(error, dispatch, faqsConstants.GET_ALL_FAQS_FAIL);
   }
};
