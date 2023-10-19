import Axios from "./Axios";

// *********PUBLIC APIs***********

//get all movies Function

export const getAllMoviesService = async ({
   category,
   time,
   language,
   rate,
   year,
   search,
   pageNumber,
}) => {
   const { data } = await Axios.get(
      `/movies?category=${category}&time=${time}&language=${language}&rate=${rate}&year=${year}&search=${search}&pageNumber=${pageNumber}`
   );
   return data;
};
