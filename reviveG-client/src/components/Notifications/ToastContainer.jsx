import { Toaster } from "react-hot-toast";

import React from "react";

const ToastContainer = () => {
   return (
      <Toaster
         position='bottom-left'
         reverseOrder={false}
         gutter={8}
         toastOptions={{
            duration: 2000,
         }}
      ></Toaster>
   );
};

export default ToastContainer;
