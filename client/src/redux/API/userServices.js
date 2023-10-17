import Axios from "./Axios";

//register new user

const registerService = async (user) => {
   const { data } = await Axios.post("/users", user);
   if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
   }
   return data;
};

//logout user Function

const logoutService = () => {
   localStorage.removeItem("userInfo");
   return null;
};

//login user API call

const loginService = async (user) => {
   const { data } = await Axios.post("/users/login", user);

   if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
   }
   return data;
};

//update profile API call

const updateProfileService = async (user, token) => {
   const { data } = await Axios.put("/users", user, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
   }
   return data;
};

const deleteProfileService = async (token) => {
   const { data } = await Axios.delete("/users", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   if (data) {
      localStorage.removeItem("userInfo");
   }
   return data;
};

//change password api call

const changePasswordService = async (passwords, token) => {
   const { data } = await Axios.put("/users/password", passwords, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};

//get all favorite movies

const getFavoriteMovies = async (token) => {
   const { data } = await Axios.get("/users/favorites", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};

//delete all favorite movies

const deleteFavoriteMovies = async (token) => {
   const { data } = await Axios.delete("/users/favorites", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return data;
};
export {
   registerService,
   loginService,
   loginService,
   updateProfileService,
   deleteProfileService,
   changePasswordService,
   getFavoriteMovies,
   deleteFavoriteMovies
};
