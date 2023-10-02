import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const NotFound = () => {
   return (
      <div className='flex-colo gap-6 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
         {/* not found */}
         {/* <img
            className='w-full h-96 object-contain'
            src='/404.svg'
            alt='notFound'
         /> */}
         <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
         <p className='font-medium text-border leading-6'>page not found</p>
         <Link
            to='/'
            className='bg-subMain text-white font-medium py-3 px-4 rounded-md gap-4 flex-rows'
         >
            <BiHomeAlt /> Home
         </Link>
      </div>
   );
};

export default NotFound;
