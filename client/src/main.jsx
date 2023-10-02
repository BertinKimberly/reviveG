import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import DrawerContext from "./context/DrawerContext"; // Import the DrawerContext component

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <React.StrictMode>
         <DrawerContext>
            <App />
         </DrawerContext>
      </React.StrictMode>
   </BrowserRouter>
);
