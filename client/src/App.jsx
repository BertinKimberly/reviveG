import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import NotFound from "./screens/NotFound";
import MoviesPage from "./screens/Movies";
import SingleMovie from "./screens/SingleMovie";

const App = () => {
   return (
      <Routes>
         <Route
            path='/'
            element={<HomeScreen />}
         />
         <Route
            path='/about-us'
            element={<AboutUs />}
         />
         <Route
            path='/contac-us'
            element={<ContactUs />}
         />
         <Route
            path='/movies'
            element={<MoviesPage />}
         />
         <Route
            path='/movie/:id'
            element={<SingleMovie />}
         />
         <Route
            path='*'
            element={<NotFound />}
         />
      </Routes>
   );
};

export default App;
