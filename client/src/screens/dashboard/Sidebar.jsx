import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaPlus, FaUsers } from "react-icons/fa";
import {
   RiLockPasswordFill,
   RiLogoutBoxFill,
   RiMovie2Fill,
} from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import Layout from "../../Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/Actions/userActions";
import toast from "react-hot-toast";

const Sidebar = ({ children }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { userInfo } = useSelector((state) => state.userLogin);

   //logout function

   const logOutHandler = () => {
      dispatch(logoutAction());

      toast.success("Logged out successfully");
      navigate("/login");
   };
   const SideLinks = userInfo?.isAdmin
      ? [
           {
              name: "Dashboard",
              link: "/dashboard",
              icon: BsFillGridFill,
           },
           {
              name: "Movies List",
              link: "/moviesList",
              icon: FaListAlt,
           },
           {
              name: "Add Movie",
              link: "/addmovie",
              icon: RiMovie2Fill,
           },
           {
              name: "Categories",
              link: "/categories",
              icon: FaPlus,
           },
           {
              name: "Users",
              link: "/users",
              icon: FaUsers,
           },
           {
              name: "Update Profile",
              link: "/profile",
              icon: FiSettings,
           },
           {
              name: "Favorite Movies",
              link: "/favorites",
              icon: FaHeart,
           },
           {
              name: "Change Password",
              link: "/password",
              icon: RiLockPasswordFill,
           },
        ]
      : userInfo
      ? [
           {
              name: "Update Profile",
              link: "/profile",
              icon: FiSettings,
           },
           {
              name: "Favorite Movies",
              link: "/favorites",
              icon: FaHeart,
           },
           {
              name: "Change Password",
              link: "/password",
              icon: RiLockPasswordFill,
           },
        ]
      : [];

   const active = "bg-dryGray text-subMain";
   const hover = "hover:text-white hover:bg-main";
   const inActive =
      "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
   const Hover = ({ isActive }) => {
      isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
   };
   return (
      <Layout>
         <div className='min-h-screen container mx-auto px-2'>
            <div className='xl:grid grid-cols-8 items-start md:py-12 py-6'>
               <div className='col-span-2 sticky bg-dry border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
                  {SideLinks.map((link, index) => (
                     <NavLink
                        to={link.link}
                        key={index}
                        className={Hover}
                     >
                        <link.icon /> <p>{link.name}</p>
                     </NavLink>
                  ))}
                  <button
                     onClick={logOutHandler}
                     className={`${inActive} ${hover} w-full`}
                  >
                     <RiLogoutBoxFill /> <p>Log Out</p>
                  </button>
               </div>
               <div
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  data-aos-delay='10'
                  data-aos-offset='200'
                  className='col-span-6 rounded-md bg-dry border-gray-800 p-6'
               >
                  {children}
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Sidebar;
