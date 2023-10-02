import React from "react";
import MainDrawer from "./MainDrawer";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Bs0SquareFill, BsCollectionPlay, BsPhone } from "react-icons/bs";

const MenuDrawer = ({ drawerOpen, toggleDrawer }) => {
   const Links = [
      {
         name: "Movies",
         link: "/movies",
         icon: BsCollectionPlay,
      },
      {
         name: "About Us",
         link: "/about-us",
         icon: Bs0SquareFill,
      },
      {
         name: "Contact Us",
         link: "/contact-us",
         icon: BsPhone,
      },
   ];

   const active = "bg-dry text-subMain";
   const hover = "hover:text-white hover:bg-main";
   const inActive =
      "rounded sm:gap-10 font-medium text-sm transitions flex gap-6 items-center p-4";
   const Hover = ({ isActive }) =>
      isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

   return (
      <MainDrawer
         drawerOpen={drawerOpen}
         closeDrawer={toggleDrawer}
      >
         <div className='flex flex-col w-full h-full justify-between items-center bg-main text-white rounded'>
            <div className='w-full flex-btn h-16 px-6 py-4 bg-dry'>
               <Link
                  onClick={toggleDrawer}
                  to='/'
               >
                  <h1>NETFLIXO</h1>
               </Link>
               <button
                  onClick={toggleDrawer}
                  type='button'
                  className='  px-4 py-2 text-base font-medium text-white bg-subMain hover:bg-white transitions rounded-full w-12 h-12 flex-colo'
               >
                  <FaTimes />
               </button>
            </div>
            <div className='w-full overflow-y-scroll flex-grow max-h-full'>
               {Links.map((link, index) => (
                  <NavLink
                     to={link.link}
                     key={index}
                     onClick={toggleDrawer}
                     className={Hover}
                  >
                     <link.icon className='text-lg' /> {link.name}
                  </NavLink>
               ))}
            </div>
         </div>
      </MainDrawer>
   );
};

export default MenuDrawer;
