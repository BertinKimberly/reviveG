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
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <React.StrictMode>
         <Provider store={store}>
            <DrawerContext>
               <App />
            </DrawerContext>
         </Provider>
      </React.StrictMode>
   </BrowserRouter>
);
