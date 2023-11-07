import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Bs0SquareFill, BsCollectionPlay, BsPhone } from "react-icons/bs";

const MenuDrawer = ({ drawerOpen, toggleDrawer }) => {
   const Links = [
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

   return (
      <div className={`${drawerOpen ? "show" : "hide"}`}>
         <div className='w-full flex-btn h-16 px-6 py-4 bg-dry '>
            <Link
               onClick={toggleDrawer}
               to='/'
            >
               <h1>reviveG</h1>
            </Link>
            <button
               onClick={toggleDrawer}
               type='button'
               className='  px-4 py-2 text-base font-medium text-white bg-subMain hover:bg-white transitions rounded-full w-12 h-12 flex-colo'
            >
               <FaTimes />
            </button>
         </div>
         <div className='w-full h-full flex-col items-center justify-center p-4 flex gap-3'>
            {Links.map((link, index) => (
               <NavLink
                  to={link.link}
                  key={index}
                  onClick={toggleDrawer}
                  className="text-left flex gap-3 hover:bg-main text-white p-2 text-3xl items-center"
               >
                  <link.icon className='text-lg' /> {link.name}
               </NavLink>
            ))}
         </div>
      </div>
   );
};

export default MenuDrawer;
