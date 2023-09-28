import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import PopularMovies from "../components/PopularMovies";
import Promos from "../components/Promos";
import TopRated from "../components/TopRated";

const HomeScreen = () => {
   return (
      <Layout>
         <div className='container mx-auto min-h-screen px-2 mb-6'>
            <Banner />
            <PopularMovies />
            <Promos />
            <TopRated />
         </div>
      </Layout>
   );
};

export default HomeScreen;
