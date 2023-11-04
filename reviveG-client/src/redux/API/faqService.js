//get all faqs

import Axios from "./Axios";

export const getAllFaqsService = async () => {
   const data = await Axios.get("/faqs/all");
   return data;
};
