import React from "react";

const Head = ({ title, image }) => {
   return (
      <div className='w-full bg-deepGray lg:h-64 relative overflow-hidden rounded-md '>
         <img
            src={image}
            alt="reviveG"
            className='w-full h-full object-cover opacity-10 '
         />
         <div className='absolute lg:top-24 top-16 w-full flex-colo '>
            <h1 className='text-2xl lg:text-h1 text-white text-center font-bold'>
               {title && title}
            </h1>
         </div>
      </div>
   );
};

export default Head;
