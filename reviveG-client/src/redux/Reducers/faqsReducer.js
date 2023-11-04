import * as faqsConstants from "../Constants/faqConstants";
export const getAllFaqsReducer = (state = { faqs: [] }, action) => {
   switch (action.type) {
      case faqsConstants.GET_ALL_FAQS_REQUEST:
         return { isLoading: true };
      case faqsConstants.GET_ALL_FAQS_SUCCESS:
         return {
            isLoading: false,
            faqs: action.payload,
         };
      case faqsConstants.GET_ALL_FAQS_FAIL:
         return { isLoading: false, isError: action.payload };
      default:
         return state;
   }
};
