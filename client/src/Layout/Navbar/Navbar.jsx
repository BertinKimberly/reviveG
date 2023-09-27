import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
const Navbar = () => {
   const hover = "hover:text-subMain transitions text-white";
   const Hover = ({ isActive }) => (isActive ? "hover:text-subMain" : hover);
   return (
      <>
         <div className='bg-main shadow-md sticky top-0 z-20'>
            <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7  justify-between items-center '>
               <div className='col-span-1 lg:block hidden'>
                  <Link to='/'>NETFLIXO</Link>
               </div>
               <div className='col-span-3'>
                  <form className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
                     <button
                        type='submit'
                        className='bg-subMain w-12 text-white flex-colo h-12 rounded'
                     >
                        <FaSearch />
                     </button>
                     <input
                        type='text'
                        placeholder='Search Movie'
                        className='w-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'
                     />
                  </form>
               </div>
               <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
                  <NavLink
                     to='/movies'
                     className={Hover}
                  >
                     Movies
                  </NavLink>
                  <NavLink
                     to='/about-us'
                     className={Hover}
                  >
                     About Us
                  </NavLink>
                  <NavLink
                     to='/contact-us'
                     className={Hover}
                  >
                     Contact Us
                  </NavLink>
                  <NavLink
                     to='/login'
                     className={Hover}
                  >
                     Login
                  </NavLink>
                  <NavLink
                     to='/favorite'
                     className={`${Hover} relative`}
                  >
                     <FaHeart className='w-6 h-6' />
                     <div className='w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1'>
                        3
                     </div>
                  </NavLink>
               </div>
            </div>
         </div>
      </>
   );
};

export default Navbar;
