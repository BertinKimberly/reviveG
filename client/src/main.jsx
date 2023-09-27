import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagintion";
import "swiper/css/navigation";
import "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </BrowserRouter>
);
