import React from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const MobileFooter = () => {
   const Hover = ({ isActive }) => {
      isActive ? `${active} ${inActive}` : inActive;
   };
   return (
      <>
         <div className='flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'></div>
         <footer className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
            <div className='bg-dry rounded-md flex-btn w-full p-1'>
               <NavLink
                  to='/movies'
                  className={Hover}
               >
                  <BsCollectionPlay />
               </NavLink>
            </div>
         </footer>
      </>
   );
};

export default MobileFooter;
