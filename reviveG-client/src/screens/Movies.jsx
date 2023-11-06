import React, { useEffect, useMemo, useState } from "react";
import Filters from "../components/Filters";
import Movie from "../components/Movie";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesAction } from "../redux/Actions/MoviesActions";
import Loader from "../components/Notifications/Loader";
import { RiMovie2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import {
   LanguageData,
   RatesData,
   TimesData,
   YearData,
} from "../data/FilterData";
import { useParams } from "react-router-dom";

const MoviesPage = () => {
   const { search } = useParams();
   const dispatch = useDispatch();

   //get all categories
   const { categories } = useSelector((state) => state.categoryGetAll);

   const [category, setCategory] = useState({ title: "All Categories" });
   const [year, setYear] = useState(YearData[0]);
   const [times, setTimes] = useState(TimesData[0]);
   const [rates, setRates] = useState(RatesData[0]);
   const [language, setLanguage] = useState(LanguageData[0]);

   const sameClass = "w-full gap-6 flex-colo min-h-screen";

   const { isLoading, isError, movies, pages, page } = useSelector(
      (state) => state.getAllMovies
   );

   // Queries
   const queries = useMemo(() => {
      const query = {
         category: category?.title === "All Categories" ? "" : category?.title,
         time: times?.title.replace(/\D/g, ""),
         language:
            language?.title === "Sort By Language" ? "" : language?.title,
         rate: rates?.title.replace(/\D/g, ""),
         year: year?.title.replace(/\D/g, ""),
         search: search || "",
      };
      return query;
   }, [category, times, language, rates, year, search]);

   const datas = {
      categories: categories,
      category: category,
      setCategory: setCategory,
      language: language,
      setLanguage,
      rates: rates,
      setRates: setRates,
      times: times,
      setTimes,
      year: year,
      setYear: setYear,
   };

   // Error handling
   useEffect(() => {
      if (isError) {
         toast.error(isError.message);
      }

      //get all movies by sorting
      dispatch(getAllMoviesAction(queries));
   }, [isError, dispatch, queries]);

   return (
      <Layout>
         <div className='min-h-screen container mx-auto px-2 my-6'>
            <Filters data={datas} />
            <p className='text-lg font-medium my-6'>
               Total{" "}
               <span className='font-bold text-subMain'>
                  {movies ? movies.length : 0}
               </span>{" "}
               items Found {search && `for " ${search}  "`}
            </p>
            {isLoading ? (
               <div className={sameClass}>
                  <Loader />
               </div>
            ) : movies && movies.length > 0 ? (
               <>
                  <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                     {movies.map((movie) => (
                        <Movie
                           key={movie?._id}
                           movie={movie}
                        />
                     ))}
                  </div>
               </>
            ) : (
               <div className={sameClass}>
                  <div className='w-24 h-24 rounded-full mb-4 bg-main text-subMain text-4xl flex-colo'>
                     <RiMovie2Line />
                  </div>
                  <p className='text-border text-sm'>No Movies Found</p>
               </div>
            )}
         </div>
      </Layout>
   );
};

export default MoviesPage;
