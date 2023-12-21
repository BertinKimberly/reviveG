import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import notFnd from "../assets/404.png";
import Layout from "../Layout/Layout";

const NotFound = () => {
   return (
      <Layout>
         <div className='flex-colo gap-6 w-full min-h-screen text-white  lg:py-20 py-10 px-6'>
            <img
               className='w-full h-96 object-contain'
               src={notFnd}
               alt='notFound'
            />
            <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
            <p className='font-medium text-border leading-6'>
              
               It seems that the page you requested could not be found.
            </p>
            <Link
               to='/'
               className='bg-subMain text-white font-medium py-3 px-4 rounded-md gap-4 flex-rows'
            >
               <BiHomeAlt /> Home
            </Link>
         </div>
      </Layout>
   );
};

export default NotFound;
