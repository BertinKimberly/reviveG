import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MobileFooter from "./Footer/MobileFooter";

const Layout = ({ children }) => {
   return (
      <>
         <div className=' text-white '>
            <Navbar />
            {children}
            <Footer />
            <MobileFooter />
         </div>
      </>
   );
};

export default Layout;
